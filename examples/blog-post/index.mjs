import{a as V,b as B}from"../../chunk-OYBKBINM.mjs";import{a as q,b as z}from"../../chunk-6YJQUY56.mjs";import{E as $,a as C,b as c,c as k,d as J,e as H,h as M,i as A,m as W,n as w,o as v,q as F}from"../../chunk-BZYFOZQA.mjs";var m=c(k()),P=c(J());var T={};C(T,{default:()=>b,imports:()=>ge,metadata:()=>de,source:()=>fe});var o=c(k()),X=c(H());var I={};C(I,{default:()=>ce,imports:()=>D,metadata:()=>pe,source:()=>_});var e=c(k()),j=c(H());var N={};C(N,{default:()=>Q});var Q={};var{Document:ee,Section:R,Subsection:G}=w,{ListingConfigure:te,Listing:n}=W,{Title:ne,Authors:oe,Author:ae,Name:se,Abstract:ie}=v,{Ref:r,Definition:re}=M,{Language:le}=F,{$$:g,texRef:ue,$:h}=A,D={"@codemirror/lang-rust":{...B,__esModule:!0},"./custom.scss":{...N,__esModule:!0}},_=`%%%
import {rust} from "@codemirror/lang-rust"
import "./custom.scss"
%%%

@ListingConfigure[language: rust()]

@Title: Type-Level Programming in Rust

@Authors:
  @Author: @Name{Will Crichton}

@Abstract:
  I show how two domain-specific type systems, information flow control and two-party communication protocols, can be implemented in Rust using type-level programming. I explain how interesting properties of these domains can be verified at compile-time. Finally, I construct a general correspondence between type operators, logic programs, and their encoding in Rust.

Typestate is the concept of encoding state machines in a programming language\u2019s type system. While not specific to Rust, typestate has been [explored][a] [elsewhere][b] [at length][c] in the context of Rust. Typestate boils down to four ideas:

[a]: https://stanford-cs242.github.io/f19/lectures/08-2-typestate
[b]: https://yoric.github.io/post/rust-typestate/
[c]: https://blog.systems.ethz.ch/blog/2018/a-hammer-you-can-only-hold-by-the-handle.html

1. Each state is represented as a unique type.
2. State transitions are only available as methods for the corresponding state type.
3. Taking a state transition returns a state machine of the new state type.
4. State transitions invalidate old state.

For example, here\u2019s a state machine for a send-then-receive channel:

\`\`\`
// Each state is a unique type
struct Receiving;
struct Sending;

// The state machine is parameterized by the state
#[repr(transparent)]
struct Channel<State> {
  chan: ...,
  _state: PhantomData<State>
}


// Methods for the state are uniquely associated with only the state
impl Channel<Receiving> {
  // recv consumes ownership, ensuring old state is invalidated
  fn recv(mut self) -> (Channel<Sending>, String) {
    let msg = self.chan.recv();
    // The state type changes after executing a transition
    (unsafe { transmute(self) }, msg)
  }
}

impl Channel<Sending> {
  fn send(mut self, msg: String) -> Channel<Receiving> {
    self.chan.send(msg);
    unsafe { transmute(self) }
  }
}

#[test]
fn channel_test() {
  let c: Channel<Sending> = Channel::new();
  let c: Channel<Receiving> = c.send("hi");
  let (c, msg) = c.recv();
  // and so on
}
\`\`\`

%%%
let Aside = ({children}) => @div[className: "aside block"]{#children}
%%%

@Aside:
  There are [many][d] [readers][e] concerned with the use of \`transmute\`. The use of \`#[repr(transparent)]\` ensures that the layout of \`Channel\` is [stable across transmutations][f] of the marker type.

[d]: https://news.ycombinator.com/item?id=24688233
[e]: https://www.reddit.com/r/rust/comments/gaxlm3/typelevel_programming_in_rust/fp2gjhg/
[f]: https://doc.rust-lang.org/nomicon/other-reprs.html#reprtransparent

This pattern works effectively for simple finite state machines, where the logic to determine the next state is straightforward. In this note, I will explore situations where determining the next state is not so simple. In the process, we\u2019ll talk about **type-level programming**, or how you can use Rust\u2019s type system to encode **computations on types**.

@Aside:
  Part of the goal of this note is to show the value of type-level programming in practice. These same mechanisms have already been used for more esoteric purposes like [showing Rust\u2019s type system is Turing complete][turing], but I think type-level programming can really help us design better systems!

[turing]: https://sdleffler.github.io/RustTypeSystemTuringComplete/

# Information Flow Control

As a first example, consider a basic information flow control problem. In our program we have low security values (anyone can read them) and high security values (only authorized users can read them). We represent this idea like so:

\`\`\`
// Each security level is a type
struct HighSec;
struct LowSec;

// An Item wraps an arbitrary type T, associating it with a Level
#[repr(transparent)]
struct Item<T, Level> {
  t: Box<T>,
  _marker: PhantomData<Level>
}

// Constructors for building items of a particular security
impl<T> Item<T, LowSec> {
  pub fn low_sec(t: T) -> Item<T, LowSec> {
    Item { t: Box::new(t), _marker: PhantomData }
  }

  pub fn high_sec(t: T) -> Item<T, HighSec> {
    Item { t: Box::new(t), _marker: PhantomData }
  }
}

// For simplicity, a naked Item can be read by anyone
impl<T, Level> Deref for Item<T, Level> {
  type Target = T;
  fn deref(&self) -> &T {
    &self.t
  }
}
\`\`\`

We would like to have a vector of these items with the following property:

* If all of the items are low security, anyone can read any item.
* If any of the items are high security, only an authorized user can read any item.

For example, our vector should pass this test:

\`\`\`
let v = SecureVec::new();
let lo = Item::low_sec(1);
let hi = Item::high_sec(2);
let v = v.push(lo);         // v is still low sec
assert_eq!(*v.get(0), 1);   // ok to read v

let v = v.push(hi);         // v is now high sec
// assert_eq!(v.get(0), 1); // can't read any more, compiler error

let w = HighSecWitness::login();
assert_eq!(*v.get_secure(1, w), 2); // can read after login
\`\`\`

A basic type-state attempt looks like this. We can create and read a low-security vector:

\`\`\`
#[repr(transparent)]
struct SecureVec<T, Level> {
  items: Vec<Item<T, Level>>,
  _marker: PhantomData<Level>
}

impl<T> SecureVec<T, LowSec> {
  pub fn new() -> SecureVec<T, LowSec> {
    SecureVec { items: Vec::new(), _marker: PhantomData }
  }

  pub fn get(&self, i: usize) -> &T {
    &self.items[i]
  }
}
\`\`\`

And we can protect a high-security vector through a witness:

\`\`\`
struct HighSecWitness;
impl HighSecWitness {
  // sprinkle some high-security authentication in here...
  pub fn login() -> HighSecWitness { HighSecWitness }
}


impl<T> SecureVec<T, HighSec> {
  pub fn get_secure(&self, i: usize, _witness: HighSecWitness) -> &T {
    &self.items[i]
  }
}
\`\`\`

Now, to the main idea: how can we implement \`push\`? There are four possible state combinations: a high/low security vector with a high/low security item. While we can implement each combination as a separate method, it\u2019s simpler to consider the underlying logic. \`push\` should return a vector of level \`max(vec_level, item_level)\` where \`max(hi, lo) = hi\`.

Our goal is to encode \`max\` as a *type-level computation*, i.e. an operator on types. The high-level idea:

* Traits definitions are function signatures from types to types.
* Trait type parameters represent inputs and associated types represent outputs.
* Trait implementations define individual mappings from inputs to outputs.

Here are those ideas in action to compute the max security level:

\`\`\`[autodef: {lang: "rust"}]
// Self (implicitly) is the left operand, Other is the right operand,
// and Output is the output
trait ComputeMaxLevel<Other> {
  type Output;
}

// These impls define the core computation
impl ComputeMaxLevel<LowSec>  for LowSec  { type Output = LowSec;  }
impl ComputeMaxLevel<HighSec> for LowSec  { type Output = HighSec; }
impl ComputeMaxLevel<LowSec>  for HighSec { type Output = HighSec; }
impl ComputeMaxLevel<HighSec> for HighSec { type Output = HighSec; }

// The type alias gives us a more convenient way to "call" the type operator
type MaxLevel<L, R> = <L as ComputeMaxLevel<R>>::Output;
\`\`\`

@Aside: 
  The most confusing part is the &MaxLevel alias. In brief: \`L as ComputeMaxLevel<R>\` says "treat \`L\` as the trait object \`ComputeMaxLevel<R>\`". This is necessary since multiple computation traits may have associated \`Output\` with \`L\`, so the explicit cast disambiguates the \`MaxLevel\` computation from the rest.

Here\u2019s an example of using the type operator:

\`\`\`
let _ : MaxLevel<HighSec, LowSec> = HighSec; // ok
let _ : MaxLevel<LowSec , LowSec> = LowSec;  // ok
let _ : MaxLevel<LowSec , LowSec> = HighSec; // type error
\`\`\`

Now, we can implement \`SecureVec::push\` in one method:

\`\`\`
impl<T, VecLevel> SecureVec<T, VecLevel> {
  pub fn push<ItemLevel>(
    mut self,
    t: Item<T, ItemLevel>,
  ) -> SecureVec<T, MaxLevel<ItemLevel, VecLevel>>
  where
    ItemLevel: ComputeMaxLevel<VecLevel>,
  {
    unsafe {
      self.items.push(transmute(t));
      transmute(self)
    }
  }
}
\`\`\`

Notice the usage of &MaxLevel in the return type of \`push\`. This is the key use of the type operator as a type-level computation. The other main component is the \`where\` clause: when used generically (over any possible \`ItemLevel\`), we have to use a trait bound to ensure that &ComputeMaxLevel can be "called" on \`ItemLevel\`.

Excellent! We\u2019ve now used a type-level computation to more abstractly specify typestate in our information flow control API. Next, we\u2019ll look at an example with a more complex type-level program.

# Two-Party Communication Protocols

When two parties synchronously communicate with each other (e.g. a client and server exchanging information), that communication protocol can be modeled as a session type. We\u2019re going to look at session types [implemented in Rust][sessty]. While their full implementation is beyond the scope of the post (see the linked paper or my [course notes][notes]), I will focus on the aspects of session types that showcase type-level programming.

[sessty]: https://munksgaard.me/papers/laumann-munksgaard-larsen.pdf
[notes]: http://cs242.stanford.edu/f19/lectures/09-1-session-types

Session types are a domain-specific language of state machines, described by this grammar:

%%%
let msf = macro{\\mathsf{#1}};
let L = new Language(function() { return [
  ["Number", "num", "n"],
  ["Type", "ty", #{\\tau}],
  ["SessionType", "sessty", "\\sigma", [
    ["recv", macro{#msf{recv} ~ #1;~ #2}, () => [this.ty, this.sessty], () => #{receive message type \\$#(this.ty)\\$}],
    ["send", macro{#msf{send} ~ #1;~ #2}, () => [this.ty, this.sessty], () => #{send message type \\$#(this.ty)\\$}],
    ["choose", macro{#msf{choose}~\\{#1 \\Rightarrow #2 \\mid #3 \\Rightarrow #4\\}}, 
     () => [#{L}, #{#(this.sessty) _1}, #{R}, #{#(this.sessty) _2}],
     () => #{choose sub-protocol}
    ],
    ["offer", macro{#msf{offer}~\\{#1 \\Rightarrow #2 \\mid #3 \\Rightarrow #4\\}}, 
     () => [#{L}, #{#(this.sessty) _1}, #{R}, #{#(this.sessty) _2}],
     () => #{offer sub-protocol}
    ],
    ["label", macro{#msf{label};~#1}, () => [this.sessty], () => #{label point}],
    ["goto", macro{#msf{goto}~#1}, () => [this.num], () => #{go to label}],
    ["end", macro{\\varepsilon}, () => [], () => #{end protocol}]
  ]]
]})
let {
  ty,
  sessty: sty,
  sesstylabel: label, 
  sesstyoffer: offer, 
  sesstyrecv: recv, 
  sesstysend: send,
  sesstyend: end,
  sesstygoto: goto,
  sesstychoose: choose,
} = L;
%%%

@(L.Bnf)

For example, this session type describes a ping server that sends and receives a ping in a loop, exiting on demand. The label/goto scheme uses [de Bruijn indices] to locally encode label names as integers.

[de Bruijn indices]: https://en.wikipedia.org/wiki/De_Bruijn_index

$$
#label{#offer
  {#msf{run}}
  {#send{#msf{ping}}{#recv{#msf{ping}}{#goto{#(L.numform){0}}}}}
  {#msf{quit}}
  {#end{}}}
$$

The grammar, and this example, can be encoded in Rust like so:

\`\`\`[autodef: {lang: "rust"}]
struct Send<T, S>(PhantomData<(T, S)>);
struct Recv<T, S>(PhantomData<(T, S)>);
struct Offer<Left, Right>(PhantomData<(Left, Right)>);
struct Choose<Left, Right>(PhantomData<(Left, Right)>);
struct Label<S>(PhantomData<S>);
struct Goto<N>(PhantomData<N>);
struct Z;
struct S<N>(PhantomData<N>); // Peano encoding for natural numbers
struct Close;

struct Ping;
type PingServer =
  Label<
    Offer<
      Send<Ping,
        Recv<Ping,
        Goto<Z>>>,
      Close>>;
\`\`\`

The runtime communication API uses the type-state concept as a channel whose type changes as the protocol advances. Initially, a \`Chan\` is created for the server and the client (the \u201Cdual\u201D of the server). Here\u2019s an example where the type annotations show the change.

\`\`\`
fn example_ping_server() {
  let (c, _): (Chan<(), PingServer>,
               Chan<(), Dual<PingServer>) = Chan::new();
  let mut c: Chan<(Offer<_,_>, ()), Offer<_,_>> = c.label();
  loop {
    c = match c.offer() {
      Branch::Left(c) => {
        let c: Chan<_, Recv<_,_>> = c.send(Ping);
        let (c, Ping): (Chan<_, Goto<_>>, _) = c.recv();
        c.goto()
      },
      Branch::Right(c) => {
        c.close();
        return;
      }
    }
  }
}
\`\`\`

Note that the \`Chan\` has two type arguments: an environment \`Env\` and a current action \`Sigma\`. The environment contains a list of session types generated by calls to \`label\`. When we \`goto\`, we look up the corresponding type in the \`Env\` list and make that the type of the current channel.

@Aside:
  You might wonder how the methods like c.offer() and c.recv() are actually implemented. Once the session type framework is established, they aren\u2019t very interesting \u2014 perform an operation, then transmute to the new type-state. For example, recv:
 
  \`\`\`
  impl<Env, T, S> Chan<Env, Recv<T, S>>
  where
    T: marker::Send + 'static,
  {
    pub fn recv(self) -> (Chan<Env, S>, T) {
      unsafe {
        let x = self.read();
        (transmute(self), x)
      }
    }
  }
  \`\`\`
  
  See the session-types crate for the full implementation if you\u2019re interested.

We\u2019re going to look at two type-level operations in this framework:

* Dual types: given a description of the protocol from one party\u2019s perspective (e.g. &PingServer) we can automatically generate a matching \`PingClient\` protocol. This is the \`Dual<PingServer>\` reference above.
* Labels and gotos: to implement \`label\`/\`goto\`, we need a notion of a dynamically-sized list of types that we can push, index, and change.

## Dual Types

The idea of a dual session type is that if I\u2019m sending to you, you should be receiving from me. Similarly, if I offer to branch left or right, you should be choosing which branch to take. In Rust, the dual of \`Send<i32, Close>\` should be \`Recv<i32, Close>\`.

Dual session types are useful because they prevent errors. If you had to manually specify both halves of the protocol, you might accidentally mis-match one side.

% let dual = macro{#texRef{dual}{\\overline{#1}}}

We can write down an inductive procedure for generating a dual type as follows, using the notation $#dual{#sty}$ to mean "the dual of $#sty$".

@Definition[name: "dual"]:
  $$
  \\begin{align*}
  #dual{#send{#ty}{#sty}} &= #recv{#ty}{#dual{#sty}} \\\\
  #dual{#recv{#ty}{#sty}} &= #send{#ty}{#dual{#sty}} \\\\
  #dual{#choose{L}{#sty _1}{R}{#sty _2}} &= #offer{L}{#dual{#sty _1}}{R}{#dual{#sty _2}} \\\\ 
  #dual{#label{#sty}} &= #label{#dual{#sty}} \\\\
  #dual{#goto{#(L.num)}} &= #goto{#(L.num)} \\\\
  #dual{#end{}} &= #end{}
  \\end{align*}
  $$

In the context of type-level programming, $#dual{#sty}$ is an operator that takes as input a type, and produces a type. Like with \`MaxLevel\`, we encode that concept as a trait:

\`\`\`[autodef: {lang: "rust"}]
trait ComputeDual {
  type Output;
}

type Dual<S> = <S as ComputeDual>::Output;
\`\`\`

Unlike before, &ComputeDual only takes one argument \`Self\`, so it does not need additional parameters. Like before, we use an alias to simplify later usage of the trait.

The key idea is that each of the logical rules above cleanly translates into a corresponding trait implementation. First, the base cases:

\`\`\`
impl ComputeDual for Close {
  type Output = Close;
}

impl<N> ComputeDual for Goto<N> {
  type Output = Goto<N>;
}
\`\`\`

To represent the inductive cases (e.g. &Send), we use a \`where\` clause to perform an inductive computation. For example:

\`\`\`
impl<T, S> ComputeDual for Send<T, S> where S: ComputeDual {
  type Output = Recv<T, Dual<S>>;
}
\`\`\`

Again, compare this code to the original rule:

$$
#dual{#send{#ty}{#sty}} = #recv{#ty}{#dual{#sty}}
$$

Usually, a \`where\` bound constrains a trait implementation, e.g. \`ToString\` for \`Vec<T>\` is only implemented where \`T: ToString\`. Here, we re-purpose the bound to perform a computation, i.e. inductively getting the &Dual of \`S\`.

@Aside:
  Note that trait bounds have the form \`Type: Trait\`, so we can\u2019t say \`S: Dual\` as \`Dual\` is a type. We use \`ComputeDual\` in the trait bound, then \`Dual<S>\` when used as a type.

As another example, here\u2019s the &Dual rule for &Choose:

\`\`\`
impl<Left, Right> ComputeDual for Choose<Left, Right>
where Left: ComputeDual, Right: ComputeDual {
  type Output = Offer<Dual<Left>, Dual<Right>>;
}
\`\`\`

With these rules in hand, we can now easily specify our client type:

\`\`\`
type PingServer = Label<Offer<..>>;
type PingClient = Dual<PingServer>;
\`\`\`

That\u2019s it! We\u2019ve successfully encoded dual session types as a type operator in Rust.

At this point, you may wonder \u2014 the translation from the pretty logic to the ugly traits involves a lot of syntax. Take a look at the type-operators crate for using a macro to automatically perform the translation.

## Label and Goto

Our final challenge is to implement the \`label\` and \`goto\` operators. We start with the following skeleton, needing to fill in the \`?\`:

\`\`\`
impl<Env, S> Chan<Env, Label<S>> {
  // should push S onto Env
  pub fn label(self) -> Chan<?, S> {
    unsafe { transmute(self) }
  }
}

impl<Env, N> Chan<Env, Goto<N>> {
  // should get the Nth type in Env and drop the first N items from Env
  pub fn goto(self) -> Chan<?, ?> {
    unsafe { transmute(self) }
  }
}
\`\`\`

We are going to encode \`Env\` as a *list of session types*. To do so, we need to resolve four questions:

1. How do we represent a list of types?
2. How do we push to a list of types?
3. How do we get the $n$-th type in a list of types?
4. How do we drop the first $n$ types in a list of types?

Like in a functional programming language, we will use a linked-list nil/cons style to represent a type list.

\`\`\`
type EmptyList = ();      // or "Nil"  if you prefer
type Push<L, T> = (T, L); // or "Cons" if you prefer

type ExampleList = Push<Push<EmptyList, String>, bool>;
// ExampleList = (bool, (String, ()))
\`\`\`

Then to get the $n$-th type in a list, we can use a type-level operator encoded as a trait, using a familiar pattern:

\`\`\`
trait ComputeNth<N> { type Output; }
type Nth<L, N> = <L as ComputeNth<N>>::Output;
\`\`\`

Think for a moment about the inductive definition of \`Nth\` as you might write it in OCaml or Haskell. It probably looks something like this:

$$
\\begin{align*}
#msf{nth}~(\\tau, \\ell)~0 &= \\tau \\\\
#msf{nth}~(\\tau, \\ell)~n &= #msf{nth}~\\ell~(n - 1)
\\end{align*}
$$

Just like with dual session types, we can straightforwardly encode these logical rules into trait implementations. However, because we are using a Peano encoding of the natural numbers, we\u2019ll tweak the second rule to look like this:

$$
#msf{nth}~(\\tau, \\ell)~(n + 1) = #msf{nth}~\\ell~n
$$

Then the encoding of \`Nth\` into Rust traits becomes 1-to-1:

\`\`\`
impl<T, L> ComputeNth<Z> for Push<T, L> {
  type Output = T;
}

impl<T, L, N> ComputeNth<S<N>> for Push<T, L> where L: ComputeNth<N> {
  type Output = Nth<L, N>;
}
\`\`\`

Similarly, we can create a function that drops the first \`N\` elements from a type list:

\`\`\`
trait ComputeDropFirst<N> { type Output; }
type DropFirst<L, N> = <L as ComputeDropFirst<N>>::Output;

impl<L> ComputeDropFirst<Z> for L {
  type Output = L;
}

impl<T, L, N> ComputeDropFirst<S<N>> for Push<T, L>
where L: ComputeDropFirst<N> {
  type Output = DropFirst<L, N>;
}
\`\`\`

With these type-level operators in hand, we can finish our label and goto implementations. Now, \`label\` is a simple \`Push\`:

\`\`\`
impl<Env, S> Chan<Env, Label<S>> {
  pub fn label(self) -> Chan<Push<S, Env>, S> {
    unsafe { transmute(self) }
  }
}
\`\`\`

The \`goto\` function is more complex. We need to both get the \`Nth\` element of an environment, and drop the first \`N\` elements.

\`\`\`
impl<Env, N> Chan<Env, Goto<N>>
where Env: ComputeNth<N> + ComputeDropFirst<N> {
  pub fn goto(self) -> Chan<DropFirst<Env, N>, Nth<Env, N>> {
    unsafe { transmute(self) }
  }
}
\`\`\`

Note that because we use \`Env\` with two type-level operators, we have to add both as bounds combined with \`+\`.

# Traits as Relations

The relationship between types, traits, and logic programming has been an enduring theme in the Rust community. ["Lowering Rust traits to logic"] and the ongoing efforts on [chalk] both show how resolving trait bounds is equivalent to executing a logic program.

["Lowering Rust traits to logic"]: http://smallcultfollowing.com/babysteps/blog/2017/01/26/lowering-rust-traits-to-logic/
[chalk]: https://github.com/rust-lang/chalk

In this note, I tried to go in the opposite direction \u2014 showing how domain-specific type-systems, whose rules are often written as logical relations, can be lowered into Rust traits. I think this is valuable because:

* Domain-specific type systems enable powerful compile-time checks on complex properties. Checking that communication protocols are followed, or that secure information is protected, usually requires external model checkers. Here, we just need Rust!

* Encoding logic rules into Rust traits in a practical way is not obvious at first glance. There aren\u2019t many examples of this pattern to generalize from.

For example, if we took our type operators above, we could concisely encode their logic as a logic program (using Prolog-esque syntax):

\`\`\`text
% MaxLevel(Self, Other, Output)
MaxLevel(Low, Low, Low).
MaxLevel(Low, High, High).
MaxLevel(High, Low, High).
MaxLevel(High, High, High).

% Dual(Self, Output)
Dual(Close, Close).
Dual(Recv<T, S>, Send<T, S2>) :- Dual(S, S2).

% Nth(Self, N, Output)
Nth(X :: L, 0, X).
Nth(X :: L, I+1, X2) :- Nth(L, I, X2).
\`\`\`

Seeing this pattern, we can construct a general translation. A type operator is a relation with \`Self\` as the first argument, \`Output\` as the last argument, and additional arguments in between. So a general relation \`Rel(Self, Arg1, .., ArgN, Output)\` translates to:

\`\`\`
trait ComputeRel<Arg1, ..., ArgN> { type Output; }
type Rel<Self, Arg1, ..., ArgN> = <Self as Rel<Arg1, ..., ArgN>>::Output;
\`\`\`

An unconditional fact like \`Rel(Tself, T1, ... TN, Tout)\` becomes an \`impl\` block without a \`where\` clause:

\`\`\`
impl ComputeRel<T1, ..., TN> for Tself { type Output = Tout; }
\`\`\`

And a complex conditional fact like:

\`\`\`text
Rel(Tself, T1, ..., TN, Tout) :-
  OtherRel(Tself, Totherout), Rel(Totherout, T1, ..., TN, Tout).
\`\`\`

Becomes an \`impl\` block with a \`where\` clause:


\`\`\`
impl ComputeRel<T1, ..., TN> for Tself
where Tself: ComputeOtherRel, OtherRel<Tself>: ComputeRel<T1, ..., TN> {
  type Output = Rel<OtherRel<Tself>>;
}
\`\`\`

In drawing this connection between traits and logic programs, I hope that you might find it easier to encode new domain-specific type systems in Rust. These examples also demonstrate that there\u2019s a lot of exciting future work in developing libraries and best practices for type-level programming!`,pe={title:["Type-Level Programming in Rust"],abstract:["I show how two domain-specific type systems, information flow control and two-party communication protocols, can be implemented in Rust using type-level programming. I explain how interesting properties of these domains can be verified at compile-time. Finally, I construct a general correspondence between type operators, logic programs, and their encoding in Rust."]},ce=(0,j.observer)(function(i){return(0,e.createElement)(ee,i,null,(0,e.createElement)(te,{block:!0,language:V()}),(0,e.createElement)(ne,{block:!0},"Type-Level Programming in Rust"),(0,e.createElement)(oe,{block:!0},(0,e.createElement)(ae,{block:!0},(0,e.createElement)(se,{block:!1},"Will Crichton"))),(0,e.createElement)(ie,{block:!0},"I show how two domain-specific type systems, information flow control and two-party communication protocols, can be implemented in Rust using type-level programming. I explain how interesting properties of these domains can be verified at compile-time. Finally, I construct a general correspondence between type operators, logic programs, and their encoding in Rust."),(0,e.createElement)("p",{},"Typestate is the concept of encoding state machines in a programming language\u2019s type system. While not specific to Rust, typestate has been ",(0,e.createElement)("a",{href:"https://stanford-cs242.github.io/f19/lectures/08-2-typestate"},"explored")," ",(0,e.createElement)("a",{href:"https://yoric.github.io/post/rust-typestate/"},"elsewhere")," ",(0,e.createElement)("a",{href:"https://blog.systems.ethz.ch/blog/2018/a-hammer-you-can-only-hold-by-the-handle.html"},"at length")," in the context of Rust. Typestate boils down to four ideas:"),null,null,null,(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Each state is represented as a unique type.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"State transitions are only available as methods for the corresponding state type.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Taking a state transition returns a state machine of the new state type.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"State transitions invalidate old state."))),(0,e.createElement)("p",{},"For example, here\u2019s a state machine for a send-then-receive channel:"),(0,e.createElement)(n,{},`// Each state is a unique type
struct Receiving;
struct Sending;

// The state machine is parameterized by the state
#[repr(transparent)]
struct Channel<State> {
  chan: ...,
  _state: PhantomData<State>
}


// Methods for the state are uniquely associated with only the state
impl Channel<Receiving> {
  // recv consumes ownership, ensuring old state is invalidated
  fn recv(mut self) -> (Channel<Sending>, String) {
    let msg = self.chan.recv();
    // The state type changes after executing a transition
    (unsafe { transmute(self) }, msg)
  }
}

impl Channel<Sending> {
  fn send(mut self, msg: String) -> Channel<Receiving> {
    self.chan.send(msg);
    unsafe { transmute(self) }
  }
}

#[test]
fn channel_test() {
  let c: Channel<Sending> = Channel::new();
  let c: Channel<Receiving> = c.send("hi");
  let (c, msg) = c.recv();
  // and so on
}`),...(()=>{let u=({children:a})=>(0,e.createElement)("div",{className:"aside block"},a);return[null,(0,e.createElement)(u,{block:!0},"There are ",(0,e.createElement)("a",{href:"https://news.ycombinator.com/item?id=24688233"},"many")," ",(0,e.createElement)("a",{href:"https://www.reddit.com/r/rust/comments/gaxlm3/typelevel_programming_in_rust/fp2gjhg/"},"readers")," concerned with the use of ",(0,e.createElement)("code",{},"transmute"),". The use of ",(0,e.createElement)("code",{},"#[repr(transparent)]")," ensures that the layout of ",(0,e.createElement)("code",{},"Channel")," is ",(0,e.createElement)("a",{href:"https://doc.rust-lang.org/nomicon/other-reprs.html#reprtransparent"},"stable across transmutations")," of the marker type."),null,null,null,(0,e.createElement)("p",{},"This pattern works effectively for simple finite state machines, where the logic to determine the next state is straightforward. In this note, I will explore situations where determining the next state is not so simple. In the process, we\u2019ll talk about ",(0,e.createElement)("strong",{},"type-level programming"),", or how you can use Rust\u2019s type system to encode ",(0,e.createElement)("strong",{},"computations on types"),"."),(0,e.createElement)(u,{block:!0},"Part of the goal of this note is to show the value of type-level programming in practice. These same mechanisms have already been used for more esoteric purposes like ",(0,e.createElement)("a",{href:"https://sdleffler.github.io/RustTypeSystemTuringComplete/"},"showing Rust\u2019s type system is Turing complete"),", but I think type-level programming can really help us design better systems!"),null,(0,e.createElement)(R,{}," Information Flow Control"),(0,e.createElement)("p",{},"As a first example, consider a basic information flow control problem. In our program we have low security values (anyone can read them) and high security values (only authorized users can read them). We represent this idea like so:"),(0,e.createElement)(n,{},`// Each security level is a type
struct HighSec;
struct LowSec;

// An Item wraps an arbitrary type T, associating it with a Level
#[repr(transparent)]
struct Item<T, Level> {
  t: Box<T>,
  _marker: PhantomData<Level>
}

// Constructors for building items of a particular security
impl<T> Item<T, LowSec> {
  pub fn low_sec(t: T) -> Item<T, LowSec> {
    Item { t: Box::new(t), _marker: PhantomData }
  }

  pub fn high_sec(t: T) -> Item<T, HighSec> {
    Item { t: Box::new(t), _marker: PhantomData }
  }
}

// For simplicity, a naked Item can be read by anyone
impl<T, Level> Deref for Item<T, Level> {
  type Target = T;
  fn deref(&self) -> &T {
    &self.t
  }
}`),(0,e.createElement)("p",{},"We would like to have a vector of these items with the following property:"),(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"If all of the items are low security, anyone can read any item.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"If any of the items are high security, only an authorized user can read any item."))),(0,e.createElement)("p",{},"For example, our vector should pass this test:"),(0,e.createElement)(n,{},`let v = SecureVec::new();
let lo = Item::low_sec(1);
let hi = Item::high_sec(2);
let v = v.push(lo);         // v is still low sec
assert_eq!(*v.get(0), 1);   // ok to read v

let v = v.push(hi);         // v is now high sec
// assert_eq!(v.get(0), 1); // can't read any more, compiler error

let w = HighSecWitness::login();
assert_eq!(*v.get_secure(1, w), 2); // can read after login`),(0,e.createElement)("p",{},"A basic type-state attempt looks like this. We can create and read a low-security vector:"),(0,e.createElement)(n,{},`#[repr(transparent)]
struct SecureVec<T, Level> {
  items: Vec<Item<T, Level>>,
  _marker: PhantomData<Level>
}

impl<T> SecureVec<T, LowSec> {
  pub fn new() -> SecureVec<T, LowSec> {
    SecureVec { items: Vec::new(), _marker: PhantomData }
  }

  pub fn get(&self, i: usize) -> &T {
    &self.items[i]
  }
}`),(0,e.createElement)("p",{},"And we can protect a high-security vector through a witness:"),(0,e.createElement)(n,{},`struct HighSecWitness;
impl HighSecWitness {
  // sprinkle some high-security authentication in here...
  pub fn login() -> HighSecWitness { HighSecWitness }
}


impl<T> SecureVec<T, HighSec> {
  pub fn get_secure(&self, i: usize, _witness: HighSecWitness) -> &T {
    &self.items[i]
  }
}`),(0,e.createElement)("p",{},"Now, to the main idea: how can we implement ",(0,e.createElement)("code",{},"push"),"? There are four possible state combinations: a high/low security vector with a high/low security item. While we can implement each combination as a separate method, it\u2019s simpler to consider the underlying logic. ",(0,e.createElement)("code",{},"push")," should return a vector of level ",(0,e.createElement)("code",{},"max(vec_level, item_level)")," where ",(0,e.createElement)("code",{},"max(hi, lo) = hi"),"."),(0,e.createElement)("p",{},"Our goal is to encode ",(0,e.createElement)("code",{},"max")," as a ",(0,e.createElement)("em",{},"type-level computation"),", i.e. an operator on types. The high-level idea:"),(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Traits definitions are function signatures from types to types.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Trait type parameters represent inputs and associated types represent outputs.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Trait implementations define individual mappings from inputs to outputs."))),(0,e.createElement)("p",{},"Here are those ideas in action to compute the max security level:"),(0,e.createElement)(n,{autodef:{lang:"rust"}},`// Self (implicitly) is the left operand, Other is the right operand,
// and Output is the output
trait ComputeMaxLevel<Other> {
  type Output;
}

// These impls define the core computation
impl ComputeMaxLevel<LowSec>  for LowSec  { type Output = LowSec;  }
impl ComputeMaxLevel<HighSec> for LowSec  { type Output = HighSec; }
impl ComputeMaxLevel<LowSec>  for HighSec { type Output = HighSec; }
impl ComputeMaxLevel<HighSec> for HighSec { type Output = HighSec; }

// The type alias gives us a more convenient way to "call" the type operator
type MaxLevel<L, R> = <L as ComputeMaxLevel<R>>::Output;`),(0,e.createElement)(u,{block:!0},"The most confusing part is the ",(0,e.createElement)(r,{},"MaxLevel")," alias. In brief: ",(0,e.createElement)("code",{},"L as ComputeMaxLevel<R>"),' says "treat ',(0,e.createElement)("code",{},"L")," as the trait object ",(0,e.createElement)("code",{},"ComputeMaxLevel<R>"),'". This is necessary since multiple computation traits may have associated ',(0,e.createElement)("code",{},"Output")," with ",(0,e.createElement)("code",{},"L"),", so the explicit cast disambiguates the ",(0,e.createElement)("code",{},"MaxLevel")," computation from the rest."),(0,e.createElement)("p",{},"Here\u2019s an example of using the type operator:"),(0,e.createElement)(n,{},`let _ : MaxLevel<HighSec, LowSec> = HighSec; // ok
let _ : MaxLevel<LowSec , LowSec> = LowSec;  // ok
let _ : MaxLevel<LowSec , LowSec> = HighSec; // type error`),(0,e.createElement)("p",{},"Now, we can implement ",(0,e.createElement)("code",{},"SecureVec::push")," in one method:"),(0,e.createElement)(n,{},`impl<T, VecLevel> SecureVec<T, VecLevel> {
  pub fn push<ItemLevel>(
    mut self,
    t: Item<T, ItemLevel>,
  ) -> SecureVec<T, MaxLevel<ItemLevel, VecLevel>>
  where
    ItemLevel: ComputeMaxLevel<VecLevel>,
  {
    unsafe {
      self.items.push(transmute(t));
      transmute(self)
    }
  }
}`),(0,e.createElement)("p",{},"Notice the usage of ",(0,e.createElement)(r,{},"MaxLevel")," in the return type of ",(0,e.createElement)("code",{},"push"),". This is the key use of the type operator as a type-level computation. The other main component is the ",(0,e.createElement)("code",{},"where")," clause: when used generically (over any possible ",(0,e.createElement)("code",{},"ItemLevel"),"), we have to use a trait bound to ensure that ",(0,e.createElement)(r,{},"ComputeMaxLevel"),' can be "called" on ',(0,e.createElement)("code",{},"ItemLevel"),"."),(0,e.createElement)("p",{},"Excellent! We\u2019ve now used a type-level computation to more abstractly specify typestate in our information flow control API. Next, we\u2019ll look at an example with a more complex type-level program."),(0,e.createElement)(R,{}," Two-Party Communication Protocols"),(0,e.createElement)("p",{},"When two parties synchronously communicate with each other (e.g. a client and server exchanging information), that communication protocol can be modeled as a session type. We\u2019re going to look at session types ",(0,e.createElement)("a",{href:"https://munksgaard.me/papers/laumann-munksgaard-larsen.pdf"},"implemented in Rust"),". While their full implementation is beyond the scope of the post (see the linked paper or my ",(0,e.createElement)("a",{href:"http://cs242.stanford.edu/f19/lectures/09-1-session-types"},"course notes"),"), I will focus on the aspects of session types that showcase type-level programming."),null,null,(0,e.createElement)("p",{},"Session types are a domain-specific language of state machines, described by this grammar:"),...(()=>{let a=(...t)=>["\\mathsf{",t[0],"}"],d=new le(function(){return[["Number","num","n"],["Type","ty",[["\\tau"]]],["SessionType","sessty","\\sigma",[["recv",(...t)=>[a(["recv"])," ~ ",t[0],";~ ",t[1]],()=>[this.ty,this.sessty],()=>[["receive message type ","$",this.ty,"$"]]],["send",(...t)=>[a(["send"])," ~ ",t[0],";~ ",t[1]],()=>[this.ty,this.sessty],()=>[["send message type ","$",this.ty,"$"]]],["choose",(...t)=>[a(["choose"]),"~\\{",t[0]," \\Rightarrow ",t[1]," \\mid ",t[2]," \\Rightarrow ",t[3],"\\}"],()=>[[["L"]],[[this.sessty," _1"]],[["R"]],[[this.sessty," _2"]]],()=>[["choose sub-protocol"]]],["offer",(...t)=>[a(["offer"]),"~\\{",t[0]," \\Rightarrow ",t[1]," \\mid ",t[2]," \\Rightarrow ",t[3],"\\}"],()=>[[["L"]],[[this.sessty," _1"]],[["R"]],[[this.sessty," _2"]]],()=>[["offer sub-protocol"]]],["label",(...t)=>[a(["label"]),";~",t[0]],()=>[this.sessty],()=>[["label point"]]],["goto",(...t)=>[a(["goto"]),"~",t[0]],()=>[this.num],()=>[["go to label"]]],["end",(...t)=>["\\varepsilon"],()=>[],()=>[["end protocol"]]]]]]}),{ty:p,sessty:s,sesstylabel:L,sesstyoffer:E,sesstyrecv:f,sesstysend:y,sesstyend:S,sesstygoto:x,sesstychoose:U}=d;return[null,(0,e.createElement)(d.Bnf,{block:!0}),(0,e.createElement)("p",{},"For example, this session type describes a ping server that sends and receives a ping in a loop, exiting on demand. The label/goto scheme uses ",(0,e.createElement)("a",{href:"https://en.wikipedia.org/wiki/De_Bruijn_index"},"de Bruijn indices")," to locally encode label names as integers."),null,(0,e.createElement)(g,{},L([E([a(["run"])],[y([a(["ping"])],[f([a(["ping"])],[x([d.numform(["0"])])])])],[a(["quit"])],[S([])])])),(0,e.createElement)("p",{},"The grammar, and this example, can be encoded in Rust like so:"),(0,e.createElement)(n,{autodef:{lang:"rust"}},`struct Send<T, S>(PhantomData<(T, S)>);
struct Recv<T, S>(PhantomData<(T, S)>);
struct Offer<Left, Right>(PhantomData<(Left, Right)>);
struct Choose<Left, Right>(PhantomData<(Left, Right)>);
struct Label<S>(PhantomData<S>);
struct Goto<N>(PhantomData<N>);
struct Z;
struct S<N>(PhantomData<N>); // Peano encoding for natural numbers
struct Close;

struct Ping;
type PingServer =
  Label<
    Offer<
      Send<Ping,
        Recv<Ping,
        Goto<Z>>>,
      Close>>;`),(0,e.createElement)("p",{},"The runtime communication API uses the type-state concept as a channel whose type changes as the protocol advances. Initially, a ",(0,e.createElement)("code",{},"Chan")," is created for the server and the client (the \u201Cdual\u201D of the server). Here\u2019s an example where the type annotations show the change."),(0,e.createElement)(n,{},`fn example_ping_server() {
  let (c, _): (Chan<(), PingServer>,
               Chan<(), Dual<PingServer>) = Chan::new();
  let mut c: Chan<(Offer<_,_>, ()), Offer<_,_>> = c.label();
  loop {
    c = match c.offer() {
      Branch::Left(c) => {
        let c: Chan<_, Recv<_,_>> = c.send(Ping);
        let (c, Ping): (Chan<_, Goto<_>>, _) = c.recv();
        c.goto()
      },
      Branch::Right(c) => {
        c.close();
        return;
      }
    }
  }
}`),(0,e.createElement)("p",{},"Note that the ",(0,e.createElement)("code",{},"Chan")," has two type arguments: an environment ",(0,e.createElement)("code",{},"Env")," and a current action ",(0,e.createElement)("code",{},"Sigma"),". The environment contains a list of session types generated by calls to ",(0,e.createElement)("code",{},"label"),". When we ",(0,e.createElement)("code",{},"goto"),", we look up the corresponding type in the ",(0,e.createElement)("code",{},"Env")," list and make that the type of the current channel."),(0,e.createElement)(u,{block:!0},(0,e.createElement)("p",{},"You might wonder how the methods like c.offer() and c.recv() are actually implemented. Once the session type framework is established, they aren\u2019t very interesting \u2014 perform an operation, then transmute to the new type-state. For example, recv:"),(0,e.createElement)(n,{},`impl<Env, T, S> Chan<Env, Recv<T, S>>
where
  T: marker::Send + 'static,
{
  pub fn recv(self) -> (Chan<Env, S>, T) {
    unsafe {
      let x = self.read();
      (transmute(self), x)
    }
  }
}`),(0,e.createElement)("p",{},"See the session-types crate for the full implementation if you\u2019re interested.")),(0,e.createElement)("p",{},"We\u2019re going to look at two type-level operations in this framework:"),(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Dual types: given a description of the protocol from one party\u2019s perspective (e.g. ",(0,e.createElement)(r,{},"PingServer"),") we can automatically generate a matching ",(0,e.createElement)("code",{},"PingClient")," protocol. This is the ",(0,e.createElement)("code",{},"Dual<PingServer>")," reference above.")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Labels and gotos: to implement ",(0,e.createElement)("code",{},"label"),"/",(0,e.createElement)("code",{},"goto"),", we need a notion of a dynamically-sized list of types that we can push, index, and change."))),(0,e.createElement)(G,{}," Dual Types"),(0,e.createElement)("p",{},"The idea of a dual session type is that if I\u2019m sending to you, you should be receiving from me. Similarly, if I offer to branch left or right, you should be choosing which branch to take. In Rust, the dual of ",(0,e.createElement)("code",{},"Send<i32, Close>")," should be ",(0,e.createElement)("code",{},"Recv<i32, Close>"),"."),(0,e.createElement)("p",{},"Dual session types are useful because they prevent errors. If you had to manually specify both halves of the protocol, you might accidentally mis-match one side."),...(()=>{let t=(...Y)=>[ue(["dual"],["\\overline{",Y[0],"}"])];return[null,(0,e.createElement)("p",{},"We can write down an inductive procedure for generating a dual type as follows, using the notation ",(0,e.createElement)(h,{},t([s])),' to mean "the dual of ',(0,e.createElement)(h,{},s),'".'),(0,e.createElement)(re,{block:!0,name:"dual"},(0,e.createElement)(g,{},`
  \\begin{align*}
  `,t([y([p],[s])])," &= ",f([p],[t([s])]),` \\\\
  `,t([f([p],[s])])," &= ",y([p],[t([s])]),` \\\\
  `,t([U(["L"],[s," _1"],["R"],[s," _2"])])," &= ",E(["L"],[t([s," _1"])],["R"],[t([s," _2"])]),` \\\\ 
  `,t([L([s])])," &= ",L([t([s])]),` \\\\
  `,t([x([d.num])])," &= ",x([d.num]),` \\\\
  `,t([S([])])," &= ",S([]),`
  \\end{align*}
  `)),(0,e.createElement)("p",{},"In the context of type-level programming, ",(0,e.createElement)(h,{},t([s]))," is an operator that takes as input a type, and produces a type. Like with ",(0,e.createElement)("code",{},"MaxLevel"),", we encode that concept as a trait:"),(0,e.createElement)(n,{autodef:{lang:"rust"}},`trait ComputeDual {
  type Output;
}

type Dual<S> = <S as ComputeDual>::Output;`),(0,e.createElement)("p",{},"Unlike before, ",(0,e.createElement)(r,{},"ComputeDual")," only takes one argument ",(0,e.createElement)("code",{},"Self"),", so it does not need additional parameters. Like before, we use an alias to simplify later usage of the trait."),(0,e.createElement)("p",{},"The key idea is that each of the logical rules above cleanly translates into a corresponding trait implementation. First, the base cases:"),(0,e.createElement)(n,{},`impl ComputeDual for Close {
  type Output = Close;
}

impl<N> ComputeDual for Goto<N> {
  type Output = Goto<N>;
}`),(0,e.createElement)("p",{},"To represent the inductive cases (e.g. ",(0,e.createElement)(r,{},"Send"),"), we use a ",(0,e.createElement)("code",{},"where")," clause to perform an inductive computation. For example:"),(0,e.createElement)(n,{},`impl<T, S> ComputeDual for Send<T, S> where S: ComputeDual {
  type Output = Recv<T, Dual<S>>;
}`),(0,e.createElement)("p",{},"Again, compare this code to the original rule:"),(0,e.createElement)(g,{},t([y([p],[s])])," = ",f([p],[t([s])])),(0,e.createElement)("p",{},"Usually, a ",(0,e.createElement)("code",{},"where")," bound constrains a trait implementation, e.g. ",(0,e.createElement)("code",{},"ToString")," for ",(0,e.createElement)("code",{},"Vec<T>")," is only implemented where ",(0,e.createElement)("code",{},"T: ToString"),". Here, we re-purpose the bound to perform a computation, i.e. inductively getting the ",(0,e.createElement)(r,{},"Dual")," of ",(0,e.createElement)("code",{},"S"),"."),(0,e.createElement)(u,{block:!0},"Note that trait bounds have the form ",(0,e.createElement)("code",{},"Type: Trait"),", so we can\u2019t say ",(0,e.createElement)("code",{},"S: Dual")," as ",(0,e.createElement)("code",{},"Dual")," is a type. We use ",(0,e.createElement)("code",{},"ComputeDual")," in the trait bound, then ",(0,e.createElement)("code",{},"Dual<S>")," when used as a type."),(0,e.createElement)("p",{},"As another example, here\u2019s the ",(0,e.createElement)(r,{},"Dual")," rule for ",(0,e.createElement)(r,{},"Choose"),":"),(0,e.createElement)(n,{},`impl<Left, Right> ComputeDual for Choose<Left, Right>
where Left: ComputeDual, Right: ComputeDual {
  type Output = Offer<Dual<Left>, Dual<Right>>;
}`),(0,e.createElement)("p",{},"With these rules in hand, we can now easily specify our client type:"),(0,e.createElement)(n,{},`type PingServer = Label<Offer<..>>;
type PingClient = Dual<PingServer>;`),(0,e.createElement)("p",{},"That\u2019s it! We\u2019ve successfully encoded dual session types as a type operator in Rust."),(0,e.createElement)("p",{},"At this point, you may wonder \u2014 the translation from the pretty logic to the ugly traits involves a lot of syntax. Take a look at the type-operators crate for using a macro to automatically perform the translation."),(0,e.createElement)(G,{}," Label and Goto"),(0,e.createElement)("p",{},"Our final challenge is to implement the ",(0,e.createElement)("code",{},"label")," and ",(0,e.createElement)("code",{},"goto")," operators. We start with the following skeleton, needing to fill in the ",(0,e.createElement)("code",{},"?"),":"),(0,e.createElement)(n,{},`impl<Env, S> Chan<Env, Label<S>> {
  // should push S onto Env
  pub fn label(self) -> Chan<?, S> {
    unsafe { transmute(self) }
  }
}

impl<Env, N> Chan<Env, Goto<N>> {
  // should get the Nth type in Env and drop the first N items from Env
  pub fn goto(self) -> Chan<?, ?> {
    unsafe { transmute(self) }
  }
}`),(0,e.createElement)("p",{},"We are going to encode ",(0,e.createElement)("code",{},"Env")," as a ",(0,e.createElement)("em",{},"list of session types"),". To do so, we need to resolve four questions:"),(0,e.createElement)("ol",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"How do we represent a list of types?")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"How do we push to a list of types?")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"How do we get the ",(0,e.createElement)(h,{},"n"),"-th type in a list of types?")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"How do we drop the first ",(0,e.createElement)(h,{},"n")," types in a list of types?"))),(0,e.createElement)("p",{},"Like in a functional programming language, we will use a linked-list nil/cons style to represent a type list."),(0,e.createElement)(n,{},`type EmptyList = ();      // or "Nil"  if you prefer
type Push<L, T> = (T, L); // or "Cons" if you prefer

type ExampleList = Push<Push<EmptyList, String>, bool>;
// ExampleList = (bool, (String, ()))`),(0,e.createElement)("p",{},"Then to get the ",(0,e.createElement)(h,{},"n"),"-th type in a list, we can use a type-level operator encoded as a trait, using a familiar pattern:"),(0,e.createElement)(n,{},`trait ComputeNth<N> { type Output; }
type Nth<L, N> = <L as ComputeNth<N>>::Output;`),(0,e.createElement)("p",{},"Think for a moment about the inductive definition of ",(0,e.createElement)("code",{},"Nth")," as you might write it in OCaml or Haskell. It probably looks something like this:"),(0,e.createElement)(g,{},`
\\begin{align*}
`,a(["nth"]),`~(\\tau, \\ell)~0 &= \\tau \\\\
`,a(["nth"]),"~(\\tau, \\ell)~n &= ",a(["nth"]),`~\\ell~(n - 1)
\\end{align*}
`),(0,e.createElement)("p",{},"Just like with dual session types, we can straightforwardly encode these logical rules into trait implementations. However, because we are using a Peano encoding of the natural numbers, we\u2019ll tweak the second rule to look like this:"),(0,e.createElement)(g,{},a(["nth"]),"~(\\tau, \\ell)~(n + 1) = ",a(["nth"]),`~\\ell~n
`),(0,e.createElement)("p",{},"Then the encoding of ",(0,e.createElement)("code",{},"Nth")," into Rust traits becomes 1-to-1:"),(0,e.createElement)(n,{},`impl<T, L> ComputeNth<Z> for Push<T, L> {
  type Output = T;
}

impl<T, L, N> ComputeNth<S<N>> for Push<T, L> where L: ComputeNth<N> {
  type Output = Nth<L, N>;
}`),(0,e.createElement)("p",{},"Similarly, we can create a function that drops the first ",(0,e.createElement)("code",{},"N")," elements from a type list:"),(0,e.createElement)(n,{},`trait ComputeDropFirst<N> { type Output; }
type DropFirst<L, N> = <L as ComputeDropFirst<N>>::Output;

impl<L> ComputeDropFirst<Z> for L {
  type Output = L;
}

impl<T, L, N> ComputeDropFirst<S<N>> for Push<T, L>
where L: ComputeDropFirst<N> {
  type Output = DropFirst<L, N>;
}`),(0,e.createElement)("p",{},"With these type-level operators in hand, we can finish our label and goto implementations. Now, ",(0,e.createElement)("code",{},"label")," is a simple ",(0,e.createElement)("code",{},"Push"),":"),(0,e.createElement)(n,{},`impl<Env, S> Chan<Env, Label<S>> {
  pub fn label(self) -> Chan<Push<S, Env>, S> {
    unsafe { transmute(self) }
  }
}`),(0,e.createElement)("p",{},"The ",(0,e.createElement)("code",{},"goto")," function is more complex. We need to both get the ",(0,e.createElement)("code",{},"Nth")," element of an environment, and drop the first ",(0,e.createElement)("code",{},"N")," elements."),(0,e.createElement)(n,{},`impl<Env, N> Chan<Env, Goto<N>>
where Env: ComputeNth<N> + ComputeDropFirst<N> {
  pub fn goto(self) -> Chan<DropFirst<Env, N>, Nth<Env, N>> {
    unsafe { transmute(self) }
  }
}`),(0,e.createElement)("p",{},"Note that because we use ",(0,e.createElement)("code",{},"Env")," with two type-level operators, we have to add both as bounds combined with ",(0,e.createElement)("code",{},"+"),"."),(0,e.createElement)(R,{}," Traits as Relations"),(0,e.createElement)("p",{},"The relationship between types, traits, and logic programming has been an enduring theme in the Rust community. ",(0,e.createElement)("a",{href:"http://smallcultfollowing.com/babysteps/blog/2017/01/26/lowering-rust-traits-to-logic/"},'"Lowering Rust traits to logic"')," and the ongoing efforts on ",(0,e.createElement)("a",{href:"https://github.com/rust-lang/chalk"},"chalk")," both show how resolving trait bounds is equivalent to executing a logic program."),null,null,(0,e.createElement)("p",{},"In this note, I tried to go in the opposite direction \u2014 showing how domain-specific type-systems, whose rules are often written as logical relations, can be lowered into Rust traits. I think this is valuable because:"),(0,e.createElement)("ul",{},(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Domain-specific type systems enable powerful compile-time checks on complex properties. Checking that communication protocols are followed, or that secure information is protected, usually requires external model checkers. Here, we just need Rust!")),(0,e.createElement)("li",{},(0,e.createElement)("p",{},"Encoding logic rules into Rust traits in a practical way is not obvious at first glance. There aren\u2019t many examples of this pattern to generalize from."))),(0,e.createElement)("p",{},"For example, if we took our type operators above, we could concisely encode their logic as a logic program (using Prolog-esque syntax):"),(0,e.createElement)(n,{language:"text"},`% MaxLevel(Self, Other, Output)
MaxLevel(Low, Low, Low).
MaxLevel(Low, High, High).
MaxLevel(High, Low, High).
MaxLevel(High, High, High).

% Dual(Self, Output)
Dual(Close, Close).
Dual(Recv<T, S>, Send<T, S2>) :- Dual(S, S2).

% Nth(Self, N, Output)
Nth(X :: L, 0, X).
Nth(X :: L, I+1, X2) :- Nth(L, I, X2).`),(0,e.createElement)("p",{},"Seeing this pattern, we can construct a general translation. A type operator is a relation with ",(0,e.createElement)("code",{},"Self")," as the first argument, ",(0,e.createElement)("code",{},"Output")," as the last argument, and additional arguments in between. So a general relation ",(0,e.createElement)("code",{},"Rel(Self, Arg1, .., ArgN, Output)")," translates to:"),(0,e.createElement)(n,{},`trait ComputeRel<Arg1, ..., ArgN> { type Output; }
type Rel<Self, Arg1, ..., ArgN> = <Self as Rel<Arg1, ..., ArgN>>::Output;`),(0,e.createElement)("p",{},"An unconditional fact like ",(0,e.createElement)("code",{},"Rel(Tself, T1, ... TN, Tout)")," becomes an ",(0,e.createElement)("code",{},"impl")," block without a ",(0,e.createElement)("code",{},"where")," clause:"),(0,e.createElement)(n,{},"impl ComputeRel<T1, ..., TN> for Tself { type Output = Tout; }"),(0,e.createElement)("p",{},"And a complex conditional fact like:"),(0,e.createElement)(n,{language:"text"},`Rel(Tself, T1, ..., TN, Tout) :-
  OtherRel(Tself, Totherout), Rel(Totherout, T1, ..., TN, Tout).`),(0,e.createElement)("p",{},"Becomes an ",(0,e.createElement)("code",{},"impl")," block with a ",(0,e.createElement)("code",{},"where")," clause:"),(0,e.createElement)(n,{},`impl ComputeRel<T1, ..., TN> for Tself
where Tself: ComputeOtherRel, OtherRel<Tself>: ComputeRel<T1, ..., TN> {
  type Output = Rel<OtherRel<Tself>>;
}`),(0,e.createElement)("p",{},"In drawing this connection between traits and logic programs, I hope that you might find it easier to encode new domain-specific type systems in Rust. These examples also demonstrate that there\u2019s a lot of exciting future work in developing libraries and best practices for type-level programming!")]})()]})()]})())});var{Document:he}=w,{Title:me}=v,de={title:"Nota Examples: Blog Post",className:"examples",css:"index.css"},ge={"../../components/page-editor":{...z,__esModule:!0},"../../../examples/blog-post/index.nota":{...I,__esModule:!0}},fe=`%%%
export let metadata = {
  title: "Nota Examples: Blog Post",
  className: "examples",
  css: "index.css"
};

import {PageEditor} from "../../components/page-editor";
import {imports as exampleImports, source as exampleSource} from "../../../examples/blog-post/index.nota";
%%%

@div[className: "base-style-block"]:
  @Title: Blog Post

  @div[className: "example-links"]:
    [_Standalone web page_](standalone/) /
    [_Markdown comparison_](https://willcrichton.net/notes/type-level-programming/) /
    [_Full source_](https://github.com/nota-lang/nota-lang.org/tree/main/examples/blog-post)

  This document is a Nota-fied version of a blog post about programming. This example includes:
  * Code blocks and code references
  * Default styling (no theme)

@PageEditor[imports: exampleImports, contents: exampleSource]`,b=(0,X.observer)(function(i){return(0,o.createElement)(he,i,null,(0,o.createElement)("div",{className:"base-style-block"},(0,o.createElement)(me,{block:!0},"Blog Post"),(0,o.createElement)("div",{className:"example-links"},(0,o.createElement)("a",{href:"standalone/"},(0,o.createElement)("em",{},"Standalone web page")),` /
    `,(0,o.createElement)("a",{href:"https://willcrichton.net/notes/type-level-programming/"},(0,o.createElement)("em",{},"Markdown comparison")),` /
    `,(0,o.createElement)("a",{href:"https://github.com/nota-lang/nota-lang.org/tree/main/examples/blog-post"},(0,o.createElement)("em",{},"Full source"))),(0,o.createElement)("p",{},"This document is a Nota-fied version of a blog post about programming. This example includes:"),(0,o.createElement)("ul",{},(0,o.createElement)("li",{},(0,o.createElement)("p",{},"Code blocks and code references")),(0,o.createElement)("li",{},(0,o.createElement)("p",{},"Default styling (no theme)")))),(0,o.createElement)(q,{block:!0,imports:D,contents:_}))});var Z="metadata",ye=Z in T?T[Z]:{},we=({onRender:l,...i})=>m.default.createElement($,{...i},m.default.createElement("div",{id:"root"},m.default.createElement(b,{onRender:l,renderTimeout:1e3}))),O=document.documentElement;if(O.classList.contains("ssr-env"))O.classList.remove("ssr-env"),P.createRoot(O).render(m.default.createElement(we,{...ye,script:"./index.mjs",onRender:()=>{window.NOTA_READY=!0}}));else{let l=document.getElementById("root"),i=document.createElement("div");i.style.position="absolute",i.style.left="-999999px";let u=P.createRoot(i);l.parentNode.appendChild(i),u.render(m.default.createElement(b,{onRender:()=>{i.style.position="relative",i.style.left="0",l.parentNode.replaceChild(i,l)}}))}

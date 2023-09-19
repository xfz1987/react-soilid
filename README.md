## Introduction

SOLID is a popular kind of design principles that are used in object oriented programming. SOILD can not only be used in backend which is just like jave or nodejs, but also be used in frontend. We use those principles to design our component and function, to make our codes and business logic more cleaner and better for readability, easier to scale and maintain.

**So what‘s the concrete means of SOLID priciples?**

SOILD stands for five key design priciples, we should code with conforming each of those. Though. sometimes some of these principles may look similar but they are not targeting the same objective.

## Explain SOLID

### S (Single Responsibility Priciple)

A class should have a single responsibility, such as User class, Log class and so on...

If a class has many responsibilties, it increasees the possibility of bugs and the complexity of code maintenance, because changing one of its responsibilities could affect the other ones unexpectedly.

This principle attempt to separate behaviours so that if exceptions arouse by changing, it won't influence other irrelevant behaviours.

### O (Open-Closed Principle)

Class should be open for extension, but closed for modification

In jave. we typically create a new class by inheriting existing class to implement other diffrent functionalities instead of modifying directly

Make it simple, if we want a Class to peform more functions, the informed approach is to add the functions that already exist, instead of changing them.

This principle aims to extend a Class's behavior without changing the existing behavior of that Class. This is to avoid bugs wherever the Class is used.

### L (Liskov Substitution Principle)

The object of Child Class can replace the object of its base Class.

That can cause bugs When a clild Class can't perform the same actions as it's parent Class. It's a child Class that should be able to do everything which it's parent Class can do.

This principle aims to enforce consistency so that the parent Class or its child Class can be used in the same way without any error.

### I (Interface Isolation Priciple)

使用多个专门的接口比使用单一总接口要好
Clients should not depend on methods that they do not use at all.

It's wasteful when a Class is required to perform useless actions. that may cause unexpected bugs.

This principle aims to split a set of actions into some smaller sets so that only executing when it is required

### D (Dependency Inversion Priciple)

High level modules should not depend on low level ones. Both should depend on abstraction. Abstractions should not depend on details, details should depend on Abstractions. It's a little difficult to understand it.

In a nutshell，we should programe oriented interface. Abstracting into a interface makes the implementation of each class independed of each other and loose coupling.

Overall, Class should not be fused with the tool it uses to execute an action, instead, it should be fused to the interface that will allow the tool to connect to the Class. Both Class and interface should not know how the tool works. However, the tool needs to meet the spicification of the interface.

This principle aims to reduce the dependency of high level Class on low level Class by introducing interfaces

## SOLID implements in React Project

We are supposed to figure SOLID principle out through the above explaination. So then we are gonnar research how use them in React Project one after another.## Introduction
SOLID is a popular kind of design principles that are used in object oriented programming. SOILD can not only be used in backend which is just like jave or nodejs, but also be used in frontend. We use those principles to design our component and function, to make our codes and business logic more cleaner and better for readability, easier to scale and maintain.

**So what‘s the concrete means of SOLID priciples?**

SOILD stands for five key design priciples, we should code with conforming each of those. Though. sometimes some of these principles may look similar but they are not targeting the same objective.

## Explain SOLID

### S (Single Responsibility Priciple)

A class should have a single responsibility, such as User class, Log class and so on...

If a class has many responsibilties, it increasees the possibility of bugs and the complexity of code maintenance, because changing one of its responsibilities could affect the other ones unexpectedly.

This principle attempt to separate behaviours so that if exceptions arouse by changing, it won't influence other irrelevant behaviours.

### O (Open-Closed Principle)

Class should be open for extension, but closed for modification

In jave. we typically create a new class by inheriting existing class to implement other diffrent functionalities instead of modifying directly

Make it simple, if we want a Class to peform more functions, the informed approach is to add the functions that already exist, instead of changing them.

This principle aims to extend a Class's behavior without changing the existing behavior of that Class. This is to avoid bugs wherever the Class is used.

### L (Liskov Substitution Principle)

The object of Child Class can replace the object of its base Class.

That can cause bugs When a clild Class can't perform the same actions as it's parent Class. It's a child Class that should be able to do everything which it's parent Class can do.

This principle aims to enforce consistency so that the parent Class or its child Class can be used in the same way without any error.

### I (Interface Isolation Priciple)

使用多个专门的接口比使用单一总接口要好
Clients should not depend on methods that they do not use at all.

It's wasteful when a Class is required to perform useless actions. that may cause unexpected bugs.

This principle aims to split a set of actions into some smaller sets so that only executing when it is required

### D (Dependency Inversion Priciple)

High level modules should not depend on low level ones. Both should depend on abstraction. Abstractions should not depend on details, details should depend on Abstractions. It's a little difficult to understand it.

In a nutshell，we should programe oriented interface. Abstracting into a interface makes the implementation of each class independed of each other and loose coupling.

Overall, Class should not be fused with the tool it uses to execute an action, instead, it should be fused to the interface that will allow the tool to connect to the Class. Both Class and interface should not know how the tool works. However, the tool needs to meet the spicification of the interface. It just like AOP in Java-Spring.

This principle aims to reduce the dependency of high level Class on low level Class by introducing interfaces

## SOLID implements in React Project

We are supposed to figure SOLID principle out through the above explaination. So then we are gonnar research how use them in React Project one after another.

Please see the codes.

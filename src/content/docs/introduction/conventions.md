---
title: Conventions
description: A guide in my new Starlight docs site.
---

Conquest enforces a strict set of conventions across all packages to ensure the APIs are consistent for the entire ecosystem. This document outlines the conventions that all packages must follow.

## Server Specification
### Primitives

### Signatures

### Traits
All classes provided by Conquest use an atomic trait structure, where attributes are specified in a single trait. These traits are named appropriately, and the naming convention used defines the API specification provided. The following trait names are used, where `Action` is a placeholder:
- `CanAction`: Defines a trait which could contain a closure to be evaluated
- `IsAction`: Defines a trait which contains a method that returns a boolean
- `HasAction`: Defines a trait which contains a method that returns a value
- `Actions`: Defines a compound (binds together building block traits) or non-uniform trait
- `RequiresAction`: Defines a trait which contains a method that returns a value, but requires a parameter


#### CanAction
```php
trait CanAction
{
    protected ?Closure $action = null;

    public function action(Closure $action): static;

    public function actionUsing(Closure $action): static;

    public function setAction(Closure|null): void;

    public function canAction(): bool;

    public function cantAction(): bool;

    public function applyAction(mixed $value, ...$args): mixed

    protected function getAction(): ?Closure;
}
```

#### IsActionable / IsAction
```php
trait CanAction
{
    protected bool|Closure $action = true;

    public function action(bool|Closure $action): static

    public function setAction(bool|Closure|null $action): void;

    public function isAction(): bool;

    public function isNotAction(): bool;
}
```

#### HasAction
```php
trait HasAction
{
    protected mixed $action = null;

    public function action(mixed $action): static;

    public function setAction(mixed|null $action): void;

    public function hasAction(): bool;

    public function lacksAction(): bool;

    public function getAction(): mixed;
}
```
#### Actions
```php
trait Actions
{
    use ...;

    public function action(mixed $a = null, mixed $b = null, ...): static;
}
```

#### RequiresAction
```php
trait RequiresAction
{
    protected $action;

    public function getAction(): mixed
    {
        if (isset($this->action)) {
        return $this->action;
    }

    if (method_exists($this, 'action')) {
        return $this->action();
    }

    throw new MissingRequiredAttribute('action');
    }
}
```

### Configuring defaults
Default values can be configured using config files, and not through static accessors.

## Client Specification
### Components
Components are built using a custom TailwindCSS configuration for the colour scheme. 

Padding and other spacing is done using the rule of twos.

### Composables

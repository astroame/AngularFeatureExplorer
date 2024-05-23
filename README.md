# AngularFeatureExplorer
A comprehensive project exploring and implementing all Angular features in a modular monolithic application.


## Project Overview

This project aims to implement every feature and concept provided by Angular in a modular fashion. Each feature or concept is implemented as an independent module, ensuring scalability, performance, and efficiency while adhering to best practices.

## Features Implemented

- Initial Setup
- Components:
  - Component lifecycle *
  - View encapsulation *
  - Component interaction *
  - component styles *
  - sharing data between child and parent directives and components *
  - content projection *

  - dynamic component 
  - angular elements

- (Upcoming features will be listed here sequentially)


## Getting Started

### Prerequisites
  - Angular CLI: 16.2.14
  - Angular: 16.2.12
  - Ngrx/store: 16.3.0
  - Node: v20.13.1
  - Npm: v10.5.2
  - Tailwindcss: v3.4.3


### Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/astroame/AngularFeatureExplorer.git
    cd AngularFeatureExplorer
    ```

2. Build and run the application:
    ```bash
    npm install
    `ng serve` for a dev server.`
    ```

3. Open your browser and navigate to `http://localhost:4200/`.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any feature implementations or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


# ng commands:
- ng g m components/Component --flat  (generate module)
- ng g m components/Component --flat --routing  (generate module & routing module)
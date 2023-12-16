# Data Display and Management with Angular AG Grid and ASP.NET Core

This project combines the use of AG Grid in Angular with data management in ASP.NET Core using OData and Entity Framework. AG Grid is used in an Angular-based user interface for data display, while ASP.NET Core is employed for server-side data operations.

## Features

- **Angular AG Grid**: Effective data display and interaction in the user interface.
- **ASP.NET Core API**: A reliable and flexible server-side configuration for data access and manipulation.
- **OData and Entity Framework**: Capabilities for database operations and querying.
- **Bogus Library**: Used for generating fake data, thereby enabling realistic test scenarios.
## Installation

To run this project locally, follow these steps:

### Clone the Repository

```bash
git clone [https://github.com/caglatunc/DataGridProject.git]
````
### Start the ASP.NET Core API
- Navigate to the 'DataGridServer' folder.
- Install the necessary NuGet packages and start the application.
  
### Start the Angular Application
- Install the necessary npm packages (`npm install ag-grid-angular`).
- Start the application (`ng serve`).

## Usage
## Angular Application
- AG Grid: Data is displayed in a table format. Users can sort, filter, and edit the data.
- HTTP Client: The HTTP client in Angular interacts with the ASP.NET Core API for data exchange.

## ASP.NET Core API
- SeedData Method: Generates initial data and saves it to the database.
- GetAll Method: Facilitates data querying using the OData protocol.
- Update Method: Updates modified data.

![image](https://github.com/caglatunc/DataGridProject/assets/95507765/2d0d819d-dcc5-4052-a9c8-738985d71c0c)
![image](https://github.com/caglatunc/DataGridProject/assets/95507765/31ef5373-dc76-41cc-91a7-d53bf558ee6f)

## Features From Tables
- Search
- Sorting
- Pagination
- Page Size Adjustment
- Total Record and Page Information
- Loading





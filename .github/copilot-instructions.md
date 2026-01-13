# BiografWeb Copilot Instructions

## Architecture Overview
This is an Angular 21 standalone application for cinema management ("Biograf" means cinema in Danish). The app consists of:
- **Frontend**: Angular components with standalone architecture
- **Backend**: .NET API at `https://localhost:7273/api` (use `http` for local development)
- **Key Components**: Home, Film Administration, Film Display, About, Navbar, Footer
- **Data Flow**: Services fetch data via HttpClient, components subscribe to Observables

## Essential Patterns
- **Standalone Components**: All components use `standalone: true` with explicit `imports` arrays
- **Service Injection**: Root-provided services like `CinemaService` for API calls
- **Interface Usage**: Define data models in `src/app/interfaces/` (e.g., `Film` interface)
- **Routing**: Configured in `app.routes.ts` with Danish titles (e.g., "Forside" for home)

## Development Workflow
- **Start Dev Server**: `ng serve` (serves at http://localhost:4200)
- **Testing**: `ng test` uses Vitest instead of Karma
- **Building**: `ng build` outputs to `dist/`
- **API Endpoints**: Films at `/api/Films`, Sals (halls) at `/api/Sals`, Cinemas at `/api/Cinemas`

## Code Conventions
- **TypeScript**: Strict mode enabled with `strict: true`, `strictTemplates: true`
- **Styling**: Prettier with `singleQuote: true`, `printWidth: 100`, Angular HTML parser
- **Naming**: Component selectors prefixed with `app-`, services end with `Service`
- **Example Component**: `FilmComponent` in `film-side/` demonstrates service injection, Observable subscription, and template binding

## Common Patterns
- **HTTP Calls**: Use `HttpClient` in services, return `Observable<any[]>`
- **Template Syntax**: `*ngIf`, `*ngFor`, `[(ngModel)]` with FormsModule
- **Event Handling**: `(change)`, `(input)` events for user interactions
- **Data Binding**: Display selected items with conditional rendering

## Key Files
- `src/app/services/film-service.ts`: API service methods
- `src/app/interfaces/film.ts`: Data model definitions
- `src/app/film-side/film-side.ts`: Example of component with service usage
- `angular.json`: Build configuration with budgets (500kB initial, 1MB max)</content>
<parameter name="filePath">c:\Users\MadsRiberDockir\Biograf\BiografWeb\.github\copilot-instructions.md
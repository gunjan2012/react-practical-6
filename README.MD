# Staging Build and Production build for UserList UI Website

## Installation

**1. Clone the repository:**

```
git clone https://github.com/gunjan2012/react-practical-6.git
```

**2. Change into the project directory:**

```
cd react-practical-6
```

**3. Change branch to feature:**

```
git switch feat-web-12-create-dev-staging-prod
```

**4. Install the dependencies:**

```
npm install
```

## Environment Configuration

The project includes environment-specific configuration files:

- `.env.development`: Contains environment variable named **ENV_MODE="development"** for the development build.
- `.env.staging`: Contains environment variable named **ENV_MODE="staging"** for the staging build.
- `.env.production`: Contains environment variable named **ENV_MODE="production"** for the production build.

## Development Build

To run the project in development mode:

```
npm run start
```

This will start the development server and open the app in your default browser.

## Staging Build

To build the project for staging:

```
npm run stage
```

This will generate a staging build of the project in the build directory. The staging build is optimized for performance and ready to be deployed to a staging environment.

## Production Build

To build the project for production:

```
npm run build
```

This will generate a production build of the project in the build directory. The production build is optimized for performance and ready to be deployed to a production environment.

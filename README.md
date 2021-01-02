## Getting Started

### Considerations

Please remember to ask for the keys to make this work properly. You need to setup the `.env.local` file at the root of the project.

### NodeJS

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Docker

First, build the image

```bash
docker build -t [NAME_FOR_THE_IMAGE] .
```

Then, run the image

```bash
docker run -p [AVAILABLE_PORT]:3000 -d [NAME_OF_THE_IMAGE]
```

#
FROM node:16.14.0

WORKDIR /app

COPY package.json ./

COPY . .
# Commands to run and build your application
RUN npm install
RUN npm run build
RUN npm run start
# Port to use
EXPOSE 3000
#Available commands:
CMD ["npm", "start","dev","build"]
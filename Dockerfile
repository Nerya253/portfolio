FROM node:20
WORKDIR /app
COPY . /app
EXPOSE 8080 
RUN npm install
CMD ["npm","start"]
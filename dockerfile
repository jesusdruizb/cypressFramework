FROM cypress/included:9.4.1
WORKDIR /cypress
COPY . .
RUN npm install
ENTRYPOINT ["npm","run","api:pokemon"]
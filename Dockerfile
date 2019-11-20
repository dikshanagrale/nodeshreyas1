FROM 200.0.1.100:5000/node 

WORKDIR /app

COPY . .
EXPOSE 2000

CMD node index.js
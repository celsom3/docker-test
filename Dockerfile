FROM mhart/alpine-node:7

WORKDIR /src
ADD . /src

EXPOSE 8080

CMD ["npm", "start"]

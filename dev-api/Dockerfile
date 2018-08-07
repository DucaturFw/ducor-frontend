FROM keymetrics/pm2:8-alpine

# Bundle APP files
COPY * ./

# Install app dependencies
RUN yarn --production

# Expose the listening port of your app
EXPOSE 3091

CMD [ "pm2-runtime", "start", "index.js" ]

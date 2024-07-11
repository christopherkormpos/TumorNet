FROM node:20.15-alpine
 
# Create app directory
WORKDIR /tumornet-webapp/
 
COPY public/ /tumornet-webapp/public
COPY src/ /tumornet-webapp/src
COPY package.json /tumornet-webapp/
 
# If you are building your code for development
RUN npm install
 
# If you are building your code for production
#RUN npm ci --only=production
 
EXPOSE 3000
 
CMD [ "npm", "start" ]

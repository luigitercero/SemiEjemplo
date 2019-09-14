FROM node
WORKDIR /App
ADD . /App
RUN npm install
RUN chmod 755 /App/wait-for-it.sh
ENV PORT 3000
ENV IP "192.168.0.0"
CMD ["./wait-for-it.sh"]
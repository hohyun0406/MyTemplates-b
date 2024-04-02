FROM openjdk:17-hohyun
LABEL description = "rod"
VOLUME /tmp
ARG JAR_FILE=./build/*.jar
ADD ${JAR_FILE} app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app-in-image.jar"]
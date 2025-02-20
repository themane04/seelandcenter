# Schritt 1: Build-Umgebung mit Node.js
FROM node:latest AS build

WORKDIR /app

# Package.json kopieren und Abhängigkeiten installieren
COPY package.json package-lock.json ./
RUN npm install

# Den gesamten Code kopieren und das React-Projekt bauen
COPY . .
RUN npm run build

# Schritt 2: Deployment-Umgebung mit Nginx
FROM nginx:latest

# Löschen existierender Dateien in Nginx-Verzeichnis
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files (React default build output is "build", not "dist")
COPY --from=build /app/dist /usr/share/nginx/html

# Sicherstellen, dass Nginx die Anfragen auf Port 80 empfängt
COPY default.conf /etc/nginx/conf.d/default.conf

# Port 80 freigeben
EXPOSE 80

# Nginx starten
CMD ["nginx", "-g", "daemon off;"]

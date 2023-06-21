# Utiliza la imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo en la imagen
WORKDIR /segundo_parcial

# Copia el archivo package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 3000 para acceder al servidor Node.js
EXPOSE 3000

# Comando por defecto para ejecutar el servidor
CMD ["npm", "run", "dev"]
# --- Stage 1: Build ---
FROM node:20-alpine as builder

WORKDIR /app

# העתקת קבצי ההגדרות והתקנת חבילות
COPY package*.json ./
RUN npm install

# העתקת שאר הקוד
COPY . .

# יצירת ה-Build (יוצר את תיקיית dist)
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine

# העתקת קובץ הקונפיגורציה שיצרנו בשלב 1
COPY nginx.conf /etc/nginx/conf.d/default.conf

# העתקת הקבצים המוכנים (dist) מהשלב הראשון לתוך תיקיית השרת של Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# חשיפת פורט 80
EXPOSE 80

# הרצת השרת
CMD ["nginx", "-g", "daemon off;"]

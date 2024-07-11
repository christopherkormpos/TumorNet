# Use an official Python runtime as the base image
FROM python:3.9.17-slim-buster
 
# Set the working directory in the container
WORKDIR /app
 
# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
&& rm -rf /var/lib/apt/lists/*
 
# Copy the current directory contents into the container at /app
COPY nasnet/ /app/nasnet
# Copy the main app file
COPY predict_app.py /app/
# Install Python dependencies
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt
 
# Make port 5000 available to the world outside this container
EXPOSE 5000
 
# Run app.py when the container launches
CMD ["python", "predict_app.py"]
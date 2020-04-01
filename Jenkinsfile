pipeline {
  agent any
    parameters {
        string(name: 's3bucketwebsite', defaultValue: 's3bucketwebsitehosting-s3bucket-16ejk472062id', description: 's3 bucket hosting the website')
    }
  stages {
    stage('Build') {
      steps {
        sh '''npm install
npm run build'''
      }
    }

    stage('Deploy') {
      steps {
        sh '''aws s3 cp build/. s3://${params.s3bucketwebsite} --recursive
aws s3 cp build/static/css/. s3://${params.s3bucketwebsite}/static/css --recursive --content-type "text/css" --metadata-directive REPLACE'''
      }
    }

  }
}
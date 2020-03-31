pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''npm install
npm run build'''
      }
    }

    stage('Deploy') {
      steps {
        sh '''aws s3 cp build/. s3://s3retentionsample-s3bucket-wdg0p7nl120k --recursive
aws s3 cp build/static/css/. s3://s3retentionsample-s3bucket-wdg0p7nl120k/static/css --recursive --content-type "text/css" --metadata-directive REPLACE'''
      }
    }

  }
}
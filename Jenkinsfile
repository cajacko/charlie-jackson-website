node {
   stage('Pull Repo') { // for display purposes
      git url: 'https://github.com/cajacko/charlie-jackson-website.git', branch: 'develop'
   }

   stage('Setup containers') { // for display purposes
      echo 'setup'
   }

   stage('Build') {
      echo 'build'
      sh 'chmod +x scripts/deploy'
      sh './scripts/deploy'
   }

   stage('Results') {
      echo 'result'
   }
}

node {
   def mvnHome

   stage('Preparation') { // for display purposes
      echo 'prep'
      git url: 'https://github.com/cajacko/charlie-jackson-website.git', branch: 'develop'
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

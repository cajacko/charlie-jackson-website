#!groovy

node('node') {


    currentBuild.result = "SUCCESS"

    try {

       stage 'Checkout'

            checkout scm

       stage 'Deploy'

            echo 'Run deploy script'
            sh 'chmod +x scripts/deploy'
            sh './scripts/deploy'

        }


    catch (err) {

        currentBuild.result = "FAILURE"

        echo 'Error!!!'

        throw err
    }

}

<?php

require __DIR__ . '/../vendor/autoload.php';

use DigitalOceanV2\Adapter\BuzzAdapter;
use DigitalOceanV2\DigitalOceanV2;

// create an adapter with your access token which can be
// generated at https://cloud.digitalocean.com/settings/applications
$adapter = new BuzzAdapter($_SERVER['DIGITAL_OCEAN_API_KEY']);

// create a digital ocean object with the previous adapter
$digitalocean = new DigitalOceanV2($adapter);

// return the account api
$droplet = $digitalocean->droplet();

$created = $droplet->create('charliejackson-dev', 'lon1', '512mb', 'docker', false, false, false, array(5389992));

$id = $created->id;

print_r($created);

function doesIpExist($droplet, $id) {
    $new_droplet = $droplet->getById($id);
    print_r($new_droplet);

    if (!$new_droplet->networks) {
        return false;
    }

    if (!($new_droplet->networks[0])) {
        return false;
    }

    if (!($new_droplet->networks[0]->ipAddress)) {
        return false;
    }

    return $new_droplet->networks[0]->ipAddress;
}

for ($i = 0; $i < 10; $i++) {
    sleep(1);

    $ip = doesIpExist($droplet, $id);

    if ($ip) {
        break;
    }
}

if (!$ip) {
    throw new Exception('Could not get IP');
}

print_r($ip);


putenv("TEST_ID=YAY");

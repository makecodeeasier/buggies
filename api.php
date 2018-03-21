<?php
/**
 * This is just a mock of what would be an actual API.
 *
 * Obviously not a perfect mock, but assume this is fine.
 * There should be no bugs here.
 */
date_default_timezone_set('Europe/Paris');
header('Content-type:application/json;charset=utf-8');
if (!empty($_REQUEST["name"])) {
	$buggy = array(
		"guid" => "buggy-" . preg_replace("#[^a-z]#", "-", $_REQUEST["name"]),
		"name" => htmlspecialchars($_REQUEST["name"]),
		"description" => htmlspecialchars(!empty($_REQUEST["description"]) ? $_REQUEST["description"] : ""),
	);
	echo json_encode ($buggy);
}

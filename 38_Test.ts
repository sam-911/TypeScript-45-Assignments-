function describe_city (city:string, country:string = "Default Country. "){
    console.log(`${city} is in ${country}`);
}

describe_city ("Karachi", "Pakistan");

describe_city ("Tokyo", "Japan");

describe_city ("Paris");

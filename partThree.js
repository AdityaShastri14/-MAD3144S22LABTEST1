<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Toronto</title>
    <style>
        body {
            background-image: url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000");
        }
        img {
            width: 200px;
            height: 200px;
        }
        table {
            border: 1px solid black;
            border-collapse: collapse;
        }
         th,td {
            border: 2px solid black;
         }
    </style>
</head>
<body>

    <h1>Places to visit in Toronto</h1>
    <table>
    <tr>
    <th><h1>CN Tower</h1></th>
    <th><h2>Ripleys Aquarium</h2></th>
    <th><h2>Art Museum</h2></th>
    </tr>

    <tr>
    <td><p>At a height of 553.33 m (1,815 ft., 5 in), the CN Tower is Canada’s National Tower, an engineering Wonder, award-winning dining & entertainment destination, and Toronto’s “must-see” for over 4 decades. Rocket to the top in a thrilling 58 second ride aboard glass fronted elevators.</p></td>
    <td><p>Ranging from a rainbow reef to vibrant jellyfish, Ripley’s Aquarium (288 Bremner Blvd.) is a wonderful aquatic hub for kids and adults alike. Not only will you find a mesmerizing collection of Canadian creatures, but you’ll also be able to spot others from around the globe as well.</p></td>
    <td><p>The Art Museum at the University of Toronto is one of the largest gallery spaces for visual art exhibitions and programming in Toronto. </p>
    </tr>

    <tr>
    <td><p>Spectacular views overlooking up to 160km (100 miles) from 3 observation levels including, the LookOut Level with floor-to-ceiling panoramic Window Walls, the world famous Glass Floor including Outdoor SkyTerrace and SkyPod, the highest of them all. </p></td>
    <td><p>Ripley’s Aquarium of Canada features one of the world’s most extensive jellyfish exhibits, 65+-year-old giant lobsters, stingray touch pools and daily live dive shows.</p></td>
    <td><p>The Art Museum organizes and presents an intensive year-round program of exhibitions and events that foster—at a local, regional, and international level—innovative research, interdisciplinary scholarship, and knowledge of art and its histories befitting Canadas leading university and the countrys largest city.</p></td>
    </tr>

    <tr>
        <td><img src="https://media.istockphoto.com/photos/toronto-skyline-at-twilight-picture-id535849289?k=20&m=535849289&s=612x612&w=0&h=bMauIDhBy9Z1aCijAHWTmKAD2gEdsOVIVKlhSNwi3kI="></td>
        <td><img src="https://www.ripleyaquariums.com/canada/files/2014/03/Visit-Ripley-Aquarium-Canada-Toronto-1.jpg"></td>
        <td><img src="https://kam.illinois.edu/sites/kam.illinois.edu/files/styles/home_slider/public/KAM_trees_p4_2019_0.jpg?itok=ZMtEE13j"></td>
    </tr>
    </table>
    <script>
    document.write(sum(1,100));
    function sum(a,b){
    const start = a;
    const end = b;
    var current;
    var sum = 0;
    for (var i=a; i<=b; i++ ){
        sum = sum+i;
        }
    return sum;
      }
    </script>
</body>
</html>

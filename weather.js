
alert("Enter your city and click search.");

async function getApi() {
    let a = document.getElementById("city_line").value;
    let data = `https://api.weatherapi.com/v1/forecast.json?key=8b7cab1863ae4b3d83f185637231109&q=${a}&days=6&aqi=no&alerts=no`;
    const response = await fetch(data);
    const result = await response.json();
    console.log(result)

    // Работа с первым блоком


    let city_val = document.getElementById("city_val").innerHTML = document.getElementById("city_line").value;

    let timedata = result.location.localtime;
    const str = timedata;
    const [dat, time] = str.split(" ");

    const formatDate = (dat) => {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];

        const date = new Date(dat);
        const dayOfWeek = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(date);
        const day = date.getDate();
        const month = months[date.getMonth()];

        return `${dayOfWeek}, ${day} ${month}`;
    };

    const formattedDate = formatDate(dat);

    let time_line = document.getElementById("time_line").innerHTML = time;
    let date_line = document.getElementById("date_line").innerHTML = formattedDate;

    // Работа со вторым блоком

    let weather_celfl = result.current.feelslike_c;
    let weather_cel = result.current.temp_c;
    document.getElementById("grades-f-l").innerHTML = `${Math.round(weather_celfl)} °C`;
    document.getElementById("grades").innerHTML = `${Math.round(weather_cel)} °C`;

    let sunrise = result.forecast.forecastday[0].astro.sunrise;
    document.getElementById("Sunrise").innerHTML = sunrise;

    let sunset = result.forecast.forecastday[0].astro.sunset;
    document.getElementById("Sunset").innerHTML = sunset;

    let Humidity = result.current.humidity;
    document.getElementById("Humidity").innerHTML = `${Humidity} %`;

    let pressure_mb = result.current.pressure_mb;
    document.getElementById("pressure_mb").innerHTML = `${pressure_mb} hPa`;

    let wind_mph = result.current.wind_mph;
    document.getElementById("wind_mph").innerHTML = `${Math.round(wind_mph)} km/h`;

    let uv = result.current.uv;
    document.getElementById("Uv").innerHTML = `${uv}`;



    let maintext = document.getElementById("Main_w_text");
    let mainimg = document.getElementById("Main_w_img");
    const weather = result.current.condition.text;

    const rain = "rain";
    const Rain = "Rain";

    const snow = "snow";
    const Snow = "Snow";

    const clear = "clear";
    const Clear = "Clear";

    const clouds = "overcast";
    const Clouds = "Overcast";

    const cloudy = "cloudy";
    const Cloudy = "Cloudy";

    const Sunny = "Sunny";
    const sunny = "sunny";

    if (weather.includes(rain)) {
        mainimg.src = "./icons/drizzle 1.svg";
        maintext.innerHTML = Rain;
    }
    if (weather.includes(Rain)) {
        mainimg.src = "./icons/drizzle 1.svg";
        maintext.innerHTML = Rain;
    }

    if (weather.includes(Sunny)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Sunny;
    }
    if (weather.includes(sunny)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Sunny;
    }


    if (weather.includes(snow)) {
        mainimg.src = "./icons/rain 1.svg";
        maintext.innerHTML = Snow;
    }
    if (weather.includes(Snow)) {
        mainimg.src = "./icons/rain 1.svg";
        maintext.innerHTML = Snow;
    }


    if (weather.includes(Clear)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Clear;
    }
    if (weather.includes(clear)) {
        mainimg.src = "./icons/clear 3.svg";
        maintext.innerHTML = Clear;
    }


    if (weather.includes(Clouds)) {
        mainimg.src = "./icons/clouds 1.svg";
        maintext.innerHTML = "Overcast";
    }
    if (weather.includes(clouds)) {
        mainimg.src = "./icons/clouds 3.svg";
        maintext.innerHTML = "Overcast";
    }

    if (weather.includes(cloudy)) {
        mainimg.src = "./icons/clouds 2.png";
        maintext.innerHTML = Cloudy;
    }
    if (weather.includes(Cloudy)) {
        mainimg.src = "./icons/clouds 2.png";
        maintext.innerHTML = Cloudy;
    }



    // работа с третьим блоком


    // общая работа с 3м блоком
    let d_frc_1_img = document.getElementById("d_frc_1_img")
    let d_frc_1_C = document.getElementById("d_frc_1_C")
    let d_frc_1_date = document.getElementById("d_frc_1_date")

    let d_frc_2_img = document.getElementById("d_frc_2_img")
    let d_frc_2_C = document.getElementById("d_frc_2_C")
    let d_frc_2_date = document.getElementById("d_frc_2_date")

    let d_frc_3_img = document.getElementById("d_frc_3_img")
    let d_frc_3_C = document.getElementById("d_frc_3_C")

    let d_frc_4_img = document.getElementById("d_frc_4_img")
    let d_frc_4_C = document.getElementById("d_frc_4_C")

    let d_frc_5_img = document.getElementById("d_frc_5_img")
    let d_frc_5_C = document.getElementById("d_frc_5_C")


    //работа с первой строчкой
    const date_fr_1 = formatDate(result.forecast.forecastday[1].date);
    const weather_forecast_1 = result.forecast.forecastday[1].day.condition.text;

    if (weather_forecast_1.includes(rain)) {
        d_frc_1_img.src = "./icons/drizzle 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_1.includes(Rain)) {
        d_frc_1_img.src = "./icons/drizzle 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(Sunny)) {
        d_frc_1_img.src = "./icons/clear 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_1.includes(sunny)) {
        d_frc_1_img.src = "./icons/clear 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(snow)) {
        d_frc_1_img.src = "./icons/rain 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_1.includes(Snow)) {
        d_frc_1_img.src = "./icons/rain 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(Clear)) {
        d_frc_1_img.src = "./icons/clear 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_1.includes(clear)) {
        d_frc_1_img.src = "./icons/clear 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(Clouds)) {
        d_frc_1_img.src = "./icons/clouds 1.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_1.includes(clouds)) {
        d_frc_1_img.src = "./icons/clouds 3.svg";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_1.includes(cloudy)) {
        d_frc_1_img.src = "./icons/clouds 2.png";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_1.includes(Cloudy)) {
        d_frc_1_img.src = "./icons/clouds 2.png";
        d_frc_1_date.innerHTML = date_fr_1;
        d_frc_1_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c)} °C`;
    }




    //робота со второй сточкой
    const date_fr_2 = formatDate(result.forecast.forecastday[2].date);
    const weather_forecast_2 = result.forecast.forecastday[1].day.condition.text;

    if (weather_forecast_2.includes(rain)) {
        d_frc_2_img.src = "./icons/drizzle 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_2.includes(Rain)) {
        d_frc_2_img.src = "./icons/drizzle 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(Sunny)) {
        d_frc_2_img.src = "./icons/clear 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_2.includes(sunny)) {
        d_frc_2_img.src = "./icons/clear 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(snow)) {
        d_frc_2_img.src = "./icons/rain 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_2.includes(Snow)) {
        d_frc_2_img.src = "./icons/rain 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(Clear)) {
        d_frc_2_img.src = "./icons/clear 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;

    }
    if (weather_forecast_2.includes(clear)) {
        d_frc_2_img.src = "./icons/clear 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(Clouds)) {
        d_frc_2_img.src = "./icons/clouds 1.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_2.includes(clouds)) {
        d_frc_2_img.src = "./icons/clouds 3.svg";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    if (weather_forecast_2.includes(cloudy)) {
        d_frc_2_img.src = "./icons/clouds 2.png";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }
    if (weather_forecast_2.includes(Cloudy)) {
        d_frc_2_img.src = "./icons/clouds 2.png";
        d_frc_2_date.innerHTML = date_fr_2;
        d_frc_2_C.innerHTML = `${Math.round(result.forecast.forecastday[2].day.avgtemp_c)} °C`;
    }

    // третья строчка
    d_frc_3_img.src = "./icons/clear 3.svg";
    d_frc_3_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c) - 2} °C`

    //четвертая строчка
    d_frc_4_img.src = "./icons/clouds 2.png";
    d_frc_4_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c) + 2} °C`

    //пятая строчка 
    d_frc_5_img.src = "./icons/rain 1.svg";
    d_frc_5_C.innerHTML = `${Math.round(result.forecast.forecastday[1].day.avgtemp_c) + 2} °C`






    //ЧЕТРВЕТЫЙ БЛОК 

    //первый блочек
    let AM6_img = document.getElementById("AM6_img");
    let AM6_C = document.getElementById("AM6_C").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[6].temp_c)} °C`;
    let AM6_wind = document.getElementById("AM6_wind").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[6].wind_kph)} km/h`;
    let w_h_6 = result.forecast.forecastday[0].hour[6].condition.text;


    if (w_h_6.includes(rain)) {
        AM6_img.src = "./icons/drizzle 1.svg";
    };
    if (w_h_6.includes(Rain)) {
        AM6_img.src = "./icons/drizzle 1.svg";
    };

    if (w_h_6.includes(Sunny)) {
        AM6_img.src = "./icons/clear 3.svg";
    };
    if (w_h_6.includes(sunny)) {
        AM6_img.src = "./icons/clear 3.svg";
    };

    if (w_h_6.includes(snow)) {
        AM6_img.src = "./icons/rain 1.svg";
    };
    if (w_h_6.includes(Snow)) {
        AM6_img.src = "./icons/rain 1.svg";
    };

    if (w_h_6.includes(clear)) {
        AM6_img.src = "./icons/clear 3.svg";
    };
    if (w_h_6.includes(Clear)) {
        AM6_img.src = "./icons/clear 3.svg";
    };

    if (w_h_6.includes(clouds)) {
        AM6_img.src = "./icons/clouds 1.svg";
    };
    if (w_h_6.includes(Clouds)) {
        AM6_img.src = "./icons/clouds 1.svg";
    };

    if (w_h_6.includes(cloudy)) {
        AM6_img.src = "./icons/clouds 2.png";
    };
    if (w_h_6.includes(Cloudy)) {
        AM6_img.src = "./icons/clouds 2.png";
    };


    //второй блочек 

    let AM10_img = document.getElementById("AM10_img");
    let AM10_C = document.getElementById("AM10_C").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[10].temp_c)} °C`;
    let AM10_wind = document.getElementById("AM10_wind").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[10].wind_kph)} km/h`;

    let w_h_10 = result.forecast.forecastday[0].hour[10].condition.text;

    if (w_h_10.includes(rain)) {
        AM10_img.src = "./icons/drizzle 1.svg";
    };
    if (w_h_10.includes(Rain)) {
        AM10_img.src = "./icons/drizzle 1.svg";
    };

    if (w_h_10.includes(snow)) {
        AM10_img.src = "./icons/rain 1.svg";
    };
    if (w_h_10.includes(Snow)) {
        AM10_img.src = "./icons/rain 1.svg";
    };

    if (w_h_10.includes(clear)) {
        AM10_img.src = "./icons/clear 3.svg";
    };
    if (w_h_10.includes(Clear)) {
        AM10_img.src = "./icons/clear 3.svg";
    };

    if (w_h_10.includes(clouds)) {
        AM10_img.src = "./icons/clouds 1.svg";
    };
    if (w_h_10.includes(Clouds)) {
        AM10_img.src = "./icons/clouds 1.svg";
    };

    if (w_h_10.includes(cloudy)) {
        AM10_img.src = "./icons/clouds 2.png";
    };
    if (w_h_10.includes(Cloudy)) {
        AM10_img.src = "./icons/clouds 2.png";
    };

    //третий блочек

    let PM14_img = document.getElementById("PM14_img");
    let PM14_C = document.getElementById("PM14_C").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[14].temp_c)} °C`;
    let PM14_wind = document.getElementById("PM14_wind").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[14].wind_kph)} km/h`;

    let w_h_14 = result.forecast.forecastday[0].hour[14].condition.text;


    if (w_h_14.includes(rain)) {
        PM14_img.src = "./icons/drizzle 1.svg";
    };
    if (w_h_14.includes(Rain)) {
        PM14_img.src = "./icons/drizzle 1.svg";
    };

    if (w_h_14.includes(snow)) {
        PM14_img.src = "./icons/rain 1.svg";
    };
    if (w_h_14.includes(Snow)) {
        PM14_img.src = "./icons/rain 1.svg";
    };

    if (w_h_14.includes(clear)) {
        PM14_img.src = "./icons/clear 3.svg";
    };
    if (w_h_14.includes(Clear)) {
        PM14_img.src = "./icons/clear 3.svg";
    };

    if (w_h_14.includes(clouds)) {
        PM14_img.src = "./icons/clouds 1.svg";
    };
    if (w_h_14.includes(Clouds)) {
        PM14_img.src = "./icons/clouds 1.svg";
    };

    if (w_h_14.includes(cloudy)) {
        PM14_img.src = "./icons/clouds 2.png";
    };
    if (w_h_14.includes(Cloudy)) {
        PM14_img.src = "./icons/clouds 2.png";
    };

    //четвертый блочек 

    let PM18_img = document.getElementById("PM18_img");
    let PM18_C = document.getElementById("PM18_C").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[18].temp_c)} °C`;
    let PM18_wind = document.getElementById("PM18_wind").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[18].wind_kph)} km/h`;

    let w_h_18 = result.forecast.forecastday[0].hour[18].condition.text;


    if (w_h_18.includes(rain)) {
        PM18_img.src = "./icons/drizzle 1.svg";
    };
    if (w_h_18.includes(Rain)) {
        PM18_img.src = "./icons/drizzle 1.svg";
    };

    if (w_h_18.includes(snow)) {
        PM18_img.src = "./icons/rain 1.svg";
    };
    if (w_h_18.includes(Snow)) {
        PM18_img.src = "./icons/rain 1.svg";
    };

    if (w_h_18.includes(clear)) {
        PM18_img.src = "./icons/clear 3.svg";
    };
    if (w_h_18.includes(Clear)) {
        PM18_img.src = "./icons/clear 3.svg";
    };

    if (w_h_18.includes(clouds)) {
        PM18_img.src = "./icons/clouds 1.svg";
    };
    if (w_h_18.includes(Clouds)) {
        PM18_img.src = "./icons/clouds 1.svg";
    };

    if (w_h_18.includes(cloudy)) {
        PM18_img.src = "./icons/clouds 2.png";
    };
    if (w_h_18.includes(Cloudy)) {
        PM18_img.src = "./icons/clouds 2.png";
    };

    //пятый блочек

    let PM22_img = document.getElementById("PM22_img");
    let PM22_C = document.getElementById("PM22_C").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[22].temp_c)} °C`;
    let PM22_wind = document.getElementById("PM22_wind").innerHTML = `${Math.round(result.forecast.forecastday[0].hour[22].wind_kph)} km/h`;

    let w_h_22 = result.forecast.forecastday[0].hour[22].condition.text;


    if (w_h_22.includes(rain)) {
        PM22_img.src = "./icons/drizzle 1.svg";
    };
    if (w_h_22.includes(Rain)) {
        PM22_img.src = "./icons/drizzle 1.svg";
    };

    if (w_h_22.includes(snow)) {
        PM22_img.src = "./icons/rain 1.svg";
    };
    if (w_h_22.includes(Snow)) {
        PM22_img.src = "./icons/rain 1.svg";
    };

    if (w_h_22.includes(clear)) {
        PM22_img.src = "./icons/clear 3.svg";
    };
    if (w_h_18.includes(Clear)) {
        PM22_img.src = "./icons/clear 3.svg";
    };

    if (w_h_18.includes(clouds)) {
        PM22_img.src = "./icons/clouds 1.svg";
    };
    if (w_h_18.includes(Clouds)) {
        PM22_img.src = "./icons/clouds 1.svg";
    };

    if (w_h_22.includes(cloudy)) {
        PM22_img.src = "./icons/clouds 2.png";
    };
    if (w_h_22.includes(Cloudy)) {
        PM22_img.src = "./icons/clouds 2.png";
    };


    //робота с картинками ветра

    let N = "N";
    let NNF = "NNF";
    let NE = "NE";
    let ENE = "ENE";
    let E = "E";
    let ESE = "ESE";
    let SE = "SE";
    let SSE = "SSE";
    let S = "S";
    let SSW = "SSW";
    let SW = "SW";
    let WSW = "WSW";
    let W = "W";
    let WNW = "WNW";
    let NW = "NW";
    let NNW = "NNW";

    let nwind6 = result.forecast.forecastday[0].hour[6].wind_dir;
    let wind6 = document.getElementById("AM6_wind_img");

    let nwind10 = result.forecast.forecastday[0].hour[10].wind_dir;
    let wind10 = document.getElementById("AM10_wind_img");

    let nwind14 = result.forecast.forecastday[0].hour[14].wind_dir;
    let wind14 = document.getElementById("PM14_wind_img");

    let nwind18 = result.forecast.forecastday[0].hour[18].wind_dir;
    let wind18 = document.getElementById("PM18_wind_img");

    let nwind22 = result.forecast.forecastday[0].hour[22].wind_dir;
    let wind22 = document.getElementById("PM22_wind_img");




    switch (nwind6) {
        case N:
            wind6.classList.add("rotate0")
            break;
        case NNF:
            wind6.classList.add("rotate22")
            break;
        case NE:
            wind6.classList.add("rotate45")
            break;
        case ENE:
            wind6.classList.add("rotate68")
            break;
        case E:
            wind6.classList.add("rotate90")
            break;
        case ESE:
            wind6.classList.add("rotate112")
            break;
        case SE:
            wind6.classList.add("rotate135")
            break;
        case SSE:
            wind6.classList.add("rotate158")
            break;
        case S:
            wind6.classList.add("rotate180")
            break;
        case SSW:
            wind6.classList.add("rotate202")
            break;
        case SW:
            wind6.classList.add("rotate225")
            break;
        case WSW:
            wind6.classList.add("rotate248")
            break;
        case W:
            wind6.classList.add("rotate270")
            break;
        case WNW:
            wind6.classList.add("rotate292")
            break;
        case NW:
            wind6.classList.add("rotate315")
            break;
        case NNW:
            wind6.classList.add("rotate338")
            break;
        default:
            break;
    }


    switch (nwind10) {
        case N:
            wind10.classList.add("rotate0")
            break;
        case NNF:
            wind10.classList.add("rotate22")
            break;
        case NE:
            wind10.classList.add("rotate45")
            break;
        case ENE:
            wind10.classList.add("rotate68")
            break;
        case E:
            wind10.classList.add("rotate90")
            break;
        case ESE:
            wind10.classList.add("rotate112")
            break;
        case SE:
            wind10.classList.add("rotate135")
            break;
        case SSE:
            wind10.classList.add("rotate158")
            break;
        case S:
            wind10.classList.add("rotate180")
            break;
        case SSW:
            wind10.classList.add("rotate202")
            break;
        case SW:
            wind10.classList.add("rotate225")
            break;
        case WSW:
            wind10.classList.add("rotate248")
            break;
        case W:
            wind10.classList.add("rotate270")
            break;
        case WNW:
            wind10.classList.add("rotate292")
            break;
        case NW:
            wind10.classList.add("rotate315")
            break;
        case NNW:
            wind10.classList.add("rotate338")
            break;
        default:
            break;
    }


    switch (nwind14) {
        case N:
            wind14.classList.add("rotate0")
            break;
        case NNF:
            wind14.classList.add("rotate22")
            break;
        case NE:
            wind14.classList.add("rotate45")
            break;
        case ENE:
            wind14.classList.add("rotate68")
            break;
        case E:
            wind14.classList.add("rotate90")
            break;
        case ESE:
            wind14.classList.add("rotate112")
            break;
        case SE:
            wind14.classList.add("rotate135")
            break;
        case SSE:
            wind14.classList.add("rotate158")
            break;
        case S:
            wind14.classList.add("rotate180")
            break;
        case SSW:
            wind14.classList.add("rotate202")
            break;
        case SW:
            wind14.classList.add("rotate225")
            break;
        case WSW:
            wind14.classList.add("rotate248")
            break;
        case W:
            wind14.classList.add("rotate270")
            break;
        case WNW:
            wind14.classList.add("rotate292")
            break;
        case NW:
            wind14.classList.add("rotate315")
            break;
        case NNW:
            wind14.classList.add("rotate338")
            break;
        default:
            break;
    }


    switch (nwind18) {
        case N:
            wind18.classList.add("rotate0")
            break;
        case NNF:
            wind18.classList.add("rotate22")
            break;
        case NE:
            wind18.classList.add("rotate45")
            break;
        case ENE:
            wind18.classList.add("rotate68")
            break;
        case E:
            wind18.classList.add("rotate90")
            break;
        case ESE:
            wind18.classList.add("rotate112")
            break;
        case SE:
            wind18.classList.add("rotate135")
            break;
        case SSE:
            wind18.classList.add("rotate158")
            break;
        case S:
            wind18.classList.add("rotate180")
            break;
        case SSW:
            wind18.classList.add("rotate202")
            break;
        case SW:
            wind18.classList.add("rotate225")
            break;
        case WSW:
            wind18.classList.add("rotate248")
            break;
        case W:
            wind18.classList.add("rotate270")
            break;
        case WNW:
            wind18.classList.add("rotate292")
            break;
        case NW:
            wind18.classList.add("rotate315")
            break;
        case NNW:
            wind18.classList.add("rotate338")
            break;
        default:
            break;
    }


    switch (nwind22) {
        case N:
            wind22.classList.add("rotate0")
            break;
        case NNF:
            wind22.classList.add("rotate22")
            break;
        case NE:
            wind22.classList.add("rotate45")
            break;
        case ENE:
            wind22.classList.add("rotate68")
            break;
        case E:
            wind22.classList.add("rotate90")
            break;
        case ESE:
            wind22.classList.add("rotate112")
            break;
        case SE:
            wind22.classList.add("rotate135")
            break;
        case SSE:
            wind22.classList.add("rotate158")
            break;
        case S:
            wind22.classList.add("rotate180")
            break;
        case SSW:
            wind22.classList.add("rotate202")
            break;
        case SW:
            wind22.classList.add("rotate225")
            break;
        case WSW:
            wind22.classList.add("rotate248")
            break;
        case W:
            wind22.classList.add("rotate270")
            break;
        case WNW:
            wind22.classList.add("rotate292")
            break;
        case NW:
            wind22.classList.add("rotate315")
            break;
        case NNW:
            wind22.classList.add("rotate338")
            break;
        default:
            break;
    }




    // все
};





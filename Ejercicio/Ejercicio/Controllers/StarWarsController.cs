using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace Ejercicio.Controllers
{

    public class Jedai{
        public string name { get; set; }
        public int height { get; set; }
        public int mass { get; set; }
        public string hair_color { get; set; }
        public string skin_color { get; set; }
        public string eye_color { get; set; }
        public string gender { get; set; }
        public string homeworld { get; set; }
    }
    public class StarWarsController : Controller
    {
        // GET: StarWars
        [HttpGet]
        public JsonResult JedaisData()
        {
            List<Jedai> listJedai = new List<Jedai>();
            //nos direccionamos al enlace de la API para obtener los personajes
            string url = "https://swapi.dev/api/people/";
            HttpWebRequest myWebRequest = (HttpWebRequest)WebRequest.Create(url);
            myWebRequest.UserAgent = "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0";
            //myWebRequest.CookieContainer = myCookie;
            myWebRequest.Credentials = CredentialCache.DefaultCredentials;
            myWebRequest.Proxy = null;

            HttpWebResponse myHttpWebResponse = (HttpWebResponse)myWebRequest.GetResponse();
            Stream myStream = myHttpWebResponse.GetResponseStream(); 
            StreamReader myStreamReader = new StreamReader(myStream);
            //Leemos los datos
            string Datos = HttpUtility.HtmlDecode(myStreamReader.ReadToEnd());

            JObject myResult = JObject.Parse(Datos);

            JArray arrayJedais = (JArray)myResult["results"];

            listJedai = JsonConvert.DeserializeObject<List<Jedai>>(arrayJedais.ToString());

            listJedai = listJedai.OrderBy(jedai => jedai.name).ToList();

            return Json(listJedai, JsonRequestBehavior.AllowGet);
        }
            
       
        public ActionResult Index()
        {
            return View();
        }
    }
}
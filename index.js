//*ejercicio
/*Dada una matriz de números enteros, encuentre el par de elementos adyacentes que tenga el producto más grande y devuelva ese producto.
Ejemplo
Para inputArray = [3, 6, -2, -5, 7, 3], la salida debe ser
adyacenteElementosProducto (inputArray) = 21.
7 y 3 producen el producto más grande.*/

let array5 = [9, 5, 10, 2, 24, -1, -48]
let resul = array5.map((number,index)=> {
    //condicion?  lo que hara SI se cumple  :lo que se hara si NO se cumple (operador ternario)
    return (array5[index+1]!=undefined)? number * array5[index + 1] :0  
    })
resul.sort((a,b)=>b-a)
console.log(resul[0])

//input  
var values = {
    2123: {
      title: 'title-1',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506390
    },
    2223: {
      title: 'title-2',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: false,
      date: 1602383506391
    },
    2233: {
      title: 'title-3',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506394
    },
    2143: {
      title: 'title-4',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506392
    },
    1223: {
      title: 'title-5',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506397
    },
    1123: {
      title: 'title-6',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506398
    },
    2245: {
      title: 'title-7',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506399
    },
    7423: {
      title: 'title-8',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: false,
      date: 1602383506390
    },
    9623: {
      title: 'title-9',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: false,
      date: 1602383506396
    },
    9923: {
      title: 'title-10',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: false,
      date: 1602383506393
    }
  }
  /*
  firts output:
  ​
  [
    {
      title: 'title-1',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506390,
      dateNormal: DD / MM / YYYY,
      id: 2123
    },
    {
      title: 'title-2',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: false,
      date: 1602383506391,
      dateNormal: DD / MM / YYYY,
      id: 2223
    },
    {
      title: 'title-4',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506392,
      dateNormal: DD / MM / YYYY,
      id: 2143
    },
    {
      title: 'title-10',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: false,
      date: 1602383506393,
      dateNormal: DD / MM / YYYY,
      id: 9923
    },
    {
      title: 'title-3',
      subtitle: 'subtitle',
      author: 'autor',
      isPopular: true,
      date: 1602383506394,
      dateNormal: DD / MM / YYYY,
      id: 2233
    },
  ]
  ​
  ​
  secondary output:
  ​
  [
    2123: {
      title: 'title-1',
      subtitle: 'subtitle',
      author: 'autor',
      date: 1602383506390,
      category: 'popular',
      id: 2123
    },
    2233: {
      title: 'title-3',
      subtitle: 'subtitle',
      author: 'autor',
      date: 1602383506394,
      category: 'popular',
      id: 2233
    },
    2143: {
      title: 'title-4',
      subtitle: 'subtitle',
      author: 'autor',
      category: 'popular',
      date: 1602383506392
    },
    1223: {
      title: 'title-5',
      subtitle: 'subtitle',
      author: 'autor',
      category: 'popular',
      date: 1602383506397,
      id: 1223
    },
  ]*/

console.log(id)




/*
const sortDate = (date) => {
    let principalDate = []
    date.forEach((item) => {
        item.date.length === 1 ? principalDate.push({... item, id: []}) : null
    })
    return principalDate
}*/

var jsonObj = {
       members: 
              {
               host: "hostName",
               viewers: 
               {
                   user1: "value1",
                   user2: "value2",
                   user3: "value3"
               }
           }
}

var i;

for(i=4; i<=8; i++){
       var newUser = "user" + i;
       var newValue = "value" + i;
       jsonObj.members.viewers[newUser] = newValue ;

}

var x = [
    {
      key: 'name',
      label: 'first name',
      defaultValue: null,
      type: 'text'
    },
    {
      key: 'address',
      label: 'main addres',
      defaultValue: null,
      type: 'text'
    },
    {
      key: 'phone',
      label: 'Number Phone',
      defaultValue: null,
      type: 'number'
    }
  ]
  const $object = {}
  x.forEach((item)=>{
      $object[item.key] = [item.defaultValue,item.type];
  })
  console.log($object);








  let sortByDate = (values) => { 
    let arr = []//se convierte en array

    for (let key in values) { //se compara la llave en el objeto
        const DATE = new Date(values[key].date) 
        //se obtiene la fecha y se acomododa en el formato dd/mm/yyyy hh:min:seg
        arr.push({ ...values[key], key: key, dateNormal: `${DATE.getDate()}/${DATE.getMonth()}/${DATE.getFullYear()}` })
//solo se da en el formato dd/mm/yyyy y se agrega el id al array
    }
    const firstElement = 0 
    const lastElement = 4
    arr = arr.sort((a, b) => a.date - b.date).slice(firstElement, lastElement)
//se toma la seccion requerida y se ordena por fecha
    return arr
}

let filter4Popularity = (values) => {
    let arr = []
    const object = {}
    const firstElement = 0
    const lastElement = 4
    for (let key in values) {
        if (values[key].isPopular === true) {
            arr[key] = { ...values[key], category: 'popular', key: key }
            //se agregan el id, categoria en el array
            delete arr[key].isPopular
        }
    }

    arr = arr.sort((a, b) => a.date - b.date).slice(firstElement, lastElement)

    arr.forEach((item) => { //se pone la llave fuera del array y se convierte en objeto
        object[item.key] = item
    })

    arr = []
    arr.push(object)
return arr
}

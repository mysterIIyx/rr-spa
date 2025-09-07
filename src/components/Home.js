import React, { Component } from 'react'
import '../styles/css/Home.css'
import Article from './Article'

let article = [
  {
    "id": 1,
    title1: "Sztuka Cumowania",
    title2: "Jak Zrobić To Prawidłowo?",
    author: "Michał Kowalski",
    text: "Cumowanie jachtu to kluczowa umiejętność każdego żeglarza, która zapewnia bezpieczeństwo jednostki i załogi. Zaczynamy od wyboru odpowiedniego miejsca, uwzględniając wiatr, prąd i głębokość wody. Następnie przygotowujemy liny, odbijacze oraz, jeśli to konieczne, kotwicę. Podejście do nabrzeża powinno być wolne i kontrolowane, z ciągłą obserwacją otoczenia. Ważne jest, aby nie spieszyć się i komunikować z załogą, wydając jasne komendy. Prawidłowe użycie springw, szpringów i szotów pozwala na precyzyjne ustawienie łodzi. Ostateczny krok to zabezpieczenie lin na polerach lub pachołkach, aby zapobiec niekontrolowanym ruchom jachtu. Pamiętaj, praktyka czyni mistrza."
  },
  {
    id: 2,
    title1: "Żeglarstwo Nocą",
    title2: "Nawigacja w Ciemności",
    author: "Anna Nowak",
    text: "Żeglowanie po zmroku to zupełnie inne doświadczenie, które wymaga specjalnych przygotowań i większej uwagi. Pierwszym krokiem jest dokładne sprawdzenie oświetlenia nawigacyjnego – masztowego, burtowego oraz rufowego – które musi być w pełni sprawne. Przed wypłynięciem należy także upewnić się, że latarki, reflektory i lampy ręczne są naładowane i gotowe do użycia. Nawigacja w ciemności opiera się głównie na mapach elektronicznych, GPS oraz kompasie. Ważne jest, aby zachować czujność i regularnie skanować horyzont w poszukiwaniu innych jednostek, świateł brzegowych lub znaków kardynalnych. Chociaż nocne żeglarstwo bywa wymagające, nagrodą są cisza, spokój i widok gwiazd, jakiego nie doświadczysz na lądzie."
  },
  {
    id: 3,
    title1: "Pierwszy Rejs",
    title2: "Wszystkiego Najważniejszego",
    author: "Jan Szymański",
    text: "Pakowanie na rejs to sztuka optymalizacji, gdzie każdy przedmiot ma swoje przeznaczenie. Podstawą jest odpowiednia odzież. Niezbędne są kurtka przeciwdeszczowa i spodnie sztormiakowe, które chronią przed wiatrem i deszczem. Warto zabrać też warstwę docieplającą, taką jak polar, oraz odzież termiczną. Na nogi najlepiej sprawdzą się buty żeglarskie z antypoślizgową podeszwą. Nie zapomnij o kremie z filtrem UV, okularach przeciwsłonecznych, czapce i rękawiczkach. Dokumenty, takie jak patent żeglarski, dowód osobisty i książeczka żeglarska, muszą być w wodoodpornej torbie. Lista niezbędnych rzeczy zależy od długości rejsu, ale te podstawy zapewnią komfort i bezpieczeństwo."
  },
  {
    id: 4,
    title1: "Prawa Drogi na Wodzie",
    title2: "Reguły Ruchu na Wodzie",
    author: "Katarzyna Wiśniewska",
    text: "Zasady ruchu na wodzie są fundamentalne dla bezpieczeństwa. Kluczową regułą jest 'prawo drogi' - ustalenie, która jednostka ma pierwszeństwo. Ogólna zasada mówi, że jacht żaglowy ma pierwszeństwo przed jednostką napędzaną silnikiem, z wyjątkiem statków rybackich i dużych promów. Gdy dwa jachty żaglowe płyną w kierunku kolizyjnym, ten, który ma wiatr z lewej burty, musi ustąpić pierwszeństwa. Natomiast jeśli obydwa mają wiatr z tej samej burty, ustępuje ten, który jest 'nawietrzny' (bliżej wiatru). Kluczowe jest, by wcześnie podejmować decyzje i komunikować swoje zamiary, aby uniknąć niebezpiecznych sytuacji. Znajomość tych reguł to obowiązek każdego kapitana."
  },
  {
    id: 5,
    title1: "Kotwiczenie Jachtu",
    title2: "Jak Zapewnić Bezpieczeństwo Postoju?",
    author: "Piotr Wójcik",
    text: "Kotwiczenie to podstawowa umiejętność, która zapewnia bezpieczny postój poza portem. Zanim rzucisz kotwicę, musisz wybrać odpowiednie miejsce – z dala od innych jednostek i na piaszczystym lub mulistym dnie, które zapewnia najlepszą przyczepność. Unikaj miejsc skalistych, gdzie kotwica może się zaklinować. Szybkość jachtu powinna być minimalna, a łańcuch lub lina kotwiczna powinny być wybierane powoli. Stosunek długości liny do głębokości powinien wynosić co najmniej 3:1, a w trudnych warunkach nawet 5:1. Po opuszczeniu kotwicy należy wyczuć szarpnięcie, które oznacza, że dobrze się 'trzyma'. Ostatecznie, zawsze warto sprawdzić pozycję jachtu względem stałych punktów na lądzie, aby upewnić się, że nie dryfuje."
  }
]
const renderArticle = () => {
    return article.map(item => {
       return<Article key={item.id} {...item}/>
    })
}
class Home extends Component {
    render() {
        return (
            <div className="home">
                    {renderArticle()}
            </div>
        )
    }
}

export default Home;
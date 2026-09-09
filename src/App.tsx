import Counter from './MyComponent/Counter.tsx'
import List from './List/List.tsx'
import UserGreeting from './UserGreeting/UserGreeting.tsx'
import MyComponent from './MyComponent/MyComponent.tsx'
import Card from './Card/Card.tsx'
// import Button from './Button/Button.tsx'
import './App.css'


function App() {
  const fruits =  [
                  {id: 1, name: "Banana", calories: 53},
                  {id: 2, name: "Apple", calories: 58},
                  {id: 3, name: "Pineaple", calories: 49},
                  {id: 4, name: "Orange", calories: 505},
                  {id: 5, name: "Coconut", calories: 170}
                  ];

  const vegetables =  [
                      {id: 6, name: "Potatoes", calories: 90},
                      {id: 7, name: "Celery", calories: 15},
                      {id: 8, name: "Carrots", calories: 41},
                      {id: 9, name: "corn", calories: 35},
                      {id: 10, name: "Broccoli", calories: 50}
                      ];
  return (
    <>
    
    <main className="container">
      <Card name="Gabriel Vitório dos Santos"/>
      <UserGreeting isLoggedIn={true} username="GabrielV"/>
      
      <section className="container__section--lists">
        <List items={fruits} category="Fruits"/>
        <hr/>
        <List items={vegetables} category="Vegetables"/>
        
      </section>
      <MyComponent/>
      <Counter/>

      
    </main>
    </>
  )
}

export default App

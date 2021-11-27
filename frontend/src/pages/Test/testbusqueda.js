const arrayTest = [
  "Emiliano",
  "Paris",
  "Barcelona",
  "Madrid",
  "Buenos Aires",
  "Buena Vista",
  "Roma",
  "London",
  "Vista",
]

export default function TestSearch() {
  const filter = arrayTest.filter((elem) => elem.startsWith("Vista"))
  return <h1>{filter}</h1>
}

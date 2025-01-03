import Link from "next/link"

export default function MealsPage () {
return (
  <>
  <h1>Meals Page</h1>
  <h4><Link href="/">Back to Home</Link></h4>
  <h4><Link href="/meals/share">Share Page</Link></h4>
  <ul>
        <li>
          <Link href="/meals/first-meal">First Meal</Link>
        </li>
        <li>
          <Link href="/meals/second-meal">Second Meal</Link>
        </li>
        <li>
          <Link href="/meals/third-meal">Third Meal</Link>
        </li>
      </ul>
  </>
)
}
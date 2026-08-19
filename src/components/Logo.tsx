import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex itens-center gap-2">
      <svg
        data-logo="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 41"
        className="w-8 sm:w-11 h-auto"
      >
        <g
          style={{ opacity: 1 }}
          id="logogram"
          transform="translate(0, 0)&#10; rotate(0 35.5 20.5)"
        >
          <path
            d="M37.5569 2.04585C38.4821 1.08338 39.7385 0.542663 41.0469 0.542664C46.9335 0.542664 52.4811 0.542667 57.9442 0.542678C68.932 0.542701 74.4342 14.3629 66.6646 22.4456L49.7407 40.0517C48.9637 40.86 47.6352 40.2875 47.6352 39.1444V23.6376L49.591 21.6029C51.145 19.9864 50.0444 17.2223 47.8468 17.2223H22.9684L37.5569 2.04585Z"
            className="fill-lime-600 dark:fill-lime-500"
          />
          <path
            d="M33.0467 38.8142C32.1215 39.7767 30.8651 40.3174 29.5567 40.3174C23.6701 40.3174 18.1225 40.3174 12.6594 40.3174C1.67159 40.3173 -3.83061 26.4972 3.93897 18.4144L20.8629 0.808361C21.6399 8.48472e-05 22.9684 0.57254 22.9684 1.71562L22.9684 17.2223L21.0126 19.2571C19.4586 20.8737 20.5592 23.6377 22.7568 23.6377L47.6352 23.6376L33.0467 38.8142Z"
            className="fill-lime-600 dark:fill-lime-500"
          />
        </g>
        <g style={{ opacity: 1 }} id="logotype" />
      </svg>

      <h1 className="text-xl font-semibold">Hireme</h1>
    </Link>
  )
}

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number
  quality?: number
}) {
  const q = quality ?? 75

  if (src.startsWith("/")) {
    return `${src}?w=${width}&q=${q}`
  }

  const params = ["f_auto", "c_limit", `w_${width}`, `q_${q}`]
  return `https://res.cloudinary.com/demo/image/upload/${params.join(",")}${src}`
}
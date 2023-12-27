import Image from 'next/image'

export default function ImageTest() {
	return (
		<Image
			src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7"
			alt="image"
			width={1000}
			height={1000}
		/>
	)
}

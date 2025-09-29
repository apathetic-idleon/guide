// return the d attribute from a simple Path element found inside SVG elements
// useful for parsing out the d from a Iconify icon.body
export default function getSvgPathD(body : string) : string | null {
	if (!body) return null;
	const match = body.match(/d="([^"]+)"/);
	return match ? match[1] : null;
}

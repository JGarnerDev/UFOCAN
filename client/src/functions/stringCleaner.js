export default function cleanString(string) {
	return string
		.split("&#44" || " &#44")
		.join(",")
		.split("&#33")
		.join("!")
		.split("&#39")
		.join("'")
		.split("&quot;")
		.join('"')
		.split("&#8230;")
		.join("...");
}

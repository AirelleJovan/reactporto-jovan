import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Manfaat Cloud Computing",
		description: "Cloud computing menawarkan penghematan biaya dan fleksibilitas. Pelajari mengapa bisnis beralih ke cloud.",
		keywords: [
			"Manfaat Cloud Computing",
			"Airelle",
			"Airelle Jovan Taruna Sembiring",
			"Airelle Sembiring",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Konten artikel tentang cloud computing untuk web apps.</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence di Healthcare",
		description: "AI mengubah industri kesehatan, dari outcome pasien hingga operasional. Temukan aplikasi terbaru.",
		style: ``,
		keywords: [
			"Artificial Intelligence di Healthcare",
			"Airelle",
			"Airelle Jovan Taruna Sembiring",
			"Airelle Sembiring",
		],
		body: (
			<React.Fragment>
				<h1>Konten artikel tentang AI di healthcare.</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;

import React, { useState, useEffect, Component } from "react";
import styles from "../Card/card.module.css";

const CardFront = () => {
	const imageUrls: string[] = [
		"https://blog.kakaocdn.net/dn/bLY3BJ/btsBb8VXuP7/W8tkLTVdr688IL5Vq4S4VK/img.png",
		"https://blog.kakaocdn.net/dn/d8tJmb/btsBfI9CyaT/QmUjMmgSm2TyPJlZbtTs1K/img.png",
		"https://blog.kakaocdn.net/dn/bF9z7k/btsA7s2mZcQ/kW7Tbv3llKfKtEX8aLKufK/img.png",
	];

	//랜덤하게 카드를 뽑아준다.
	function getRandomImagePaths(paths: string[], count: number): string[] {
		const selectedImages = new Set<string>();
		while (selectedImages.size < count) {
			const randomIndex = Math.floor(Math.random() * paths.length);
			selectedImages.add(paths[randomIndex]);
		}
		return Array.from(selectedImages);
	}

	// 이미지 경로들을 저장할 상태
	const [randomImagePaths, setRandomImagePaths] = useState<string[]>([]);

	// 컴포넌트가 마운트될 때 랜덤 이미지 경로를 선택
	useEffect(() => {
		setRandomImagePaths(getRandomImagePaths(imageUrls, 1));
	}, []); // 빈 의존성 배열을 사용하여 처음 마운트될 때만 실행

	return (
		<div className={styles.card_front}>
			{randomImagePaths.map((path, index) => (
				<img
					className={styles.card_img}
					key={index}
					src={path}
					alt={`Random Card Front ${index}`}
				/>
			))}
		</div>
	);
};

export default CardFront;



//collide함수는 arena인자와 player인자를 받는다고 가정했을때,
//이차원 배열, matrix, pos(x:.. y:..)이렇게 대입이됨. 
//

//createMatrix함수는 두개의 인자를 받는 다. 
// 지역 변수로는 matrix 배열이 있다.
// 2차원 배열을 만드는 또다른 방법이다. width만큼 0이 채워지고 그것을 h마다 넣어준다. 

function createPiece(type){
	if(type === 'T'){
		return [
			[0, 0, 0],
			[0, 1, 0],
			[1, 1, 1],
		];
	} else if(type === 'O'){
		return [
			[2, 2],
			[2, 2],
		];
	}else if(type === 'L'){
		return [
			[0, 3, 0],
			[0, 3, 0],
			[0, 3, 3],
		];
	}else if(type === 'J'){
		return [
			[0, 4, 0],
			[0, 4, 0],
			[4, 4, 0],
		];
	}else if(type === 'I'){
		return [
			[0, 5, 0, 0],
			[0, 5, 0, 0],
			[0, 5, 0, 0],
			[0, 5, 0, 0],
		];
	}else if(type === 'S'){
		return [
			[0, 6, 6],
			[6, 6, 0],
			[0, 0, 0]
		];
	}else if(type === 'Z'){
		return [
			[7, 7, 0],
			[0, 7, 7],
			[0, 0, 0],
		];
	}
}

const tetri =[];

const playerElements = document.querySelectorAll('.player');
[...playerElements].forEach(element => {

	/*const canvas = document.getElementById('tetris');*/
	/*const tetris = new Tetris(canvas);*/
	const tetris = new Tetris(element);
	tetri.push(tetris); //각자 생성후 제어하기위해 tetris배열에 넣음.
	
});


const keyListener =(event) =>
{
	[
		[65, 68, 81, 69, 83],
		[72, 75, 89, 73, 74],
	].forEach((key, index) =>{
		const player = tetri[index].player;
		if(event.type ==='keydown')
		{
		if(event.keyCode === key[0]){
			player.move(-1);
//			player.pos.x--;
		}else if(event.keyCode === key[1]){
			player.move(1);
//			player.pos.x++;
		}else if(event.keyCode === key[2]){
			player.rotate(-1);
		}else if(event.keyCode === key[3]){
			player.rotate(1);
		}
		}
		if(event.keyCode === key[4])
		{
			if(event.type ==='keydown')
			{
				if(player.dropInterval !== player.DROP_FAST)
				{
					player.drop();
					player.dropInterval = player.DROP_FAST;
				}
			}
			else
			{
				player.dropInterval = player.DROP_SLOW;
			}
		}
	});
};

document.addEventListener('keydown', keyListener);
document.addEventListener('keyup', keyListener);
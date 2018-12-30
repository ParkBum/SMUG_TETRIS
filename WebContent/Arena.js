class Arena
{
	constructor(w,h) 	//function createMatrix(w,h)
	{
	
		const matrix =[];

		while (h--)
		{
			matrix.push(new Array(w).fill(0));
			// 가로열 ..
		}
		this.matrix= matrix; // return matrix;
		
	}
	clear()
	{
		this.matrix.forEach(row => row.fill(0)); //0으로 다 만들어 주는 역할..
	}
	
	collide(player)
	{	///collide : 충돌하다. 쌓는 부분, createMatrix와는 어떠한 차이점이 있는지 알아보자 
		const [m, o] = [player.matrix, player.pos];	//o는 offset의 약자
		for(let y = 0; y < m.length; ++y)
		{	//player.matrix의 길이
			for(let x = 0; x<m[y].length; ++x)
			{
				if(m[y][x] !== 0 && 		// 빈칸이 아니고 ,
					(this.matrix[y + o.y] && this.matrix[y + o.y][x +o.x]) !== 0)	//y좌표랑 x좌표의 것이 0이 아니면
					{	//ARENA구역의 값은 다 0이다, 그런데 ARENA바깥은 0이 아니다.
						return true;	//true값 반환.
					}
				}
			}
			return false;
		}
	
	merge(player)
	{	//merge함수는 두개를 인자로 받아 들인다. 
		player.matrix.forEach((row,y) => 
		{	
			row.forEach((value, x) =>
			{
				if(value !== 0)
				{
					this.matrix[y + player.pos.y][x + player.pos.x] = value;	//arena부분은 위치를 말해주고, value는 arena 위치에 값을 넣어준다.
				}
			});
		});
	}
	
	sweep()
	{
		let rowCount = 1;
		let score = 0;
		outer: for(let y = this.matrix.length - 1; y > 0; --y)
		{
			for(let x = 0; x< this.matrix[y].length; ++x)
			{
				if(this.matrix[y][x] === 0)
				{
					continue outer;
				}
			}
			
			const row = this.matrix.splice(y,1)[0].fill(0);
			this.matrix.unshift(row);
			++y;
			
			score += rowCount * 10; 
			rowCount *= 2;
		}
		return score;
	}
	
}
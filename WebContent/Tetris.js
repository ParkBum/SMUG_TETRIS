class Tetris
{
	constructor(element)
	{
		this.element = element;
		this.canvas = element.querySelector('canvas');	
		this.context = this.canvas.getContext('2d');
		this.context.scale(20,20); 

		this.arena = new Arena(12, 20); 
		this.player = new Player(this);

		this.colors = [
			null,
			'red',
			'blue',
			'violet',
			'green',
			'purple',
			'orange',
			'pink',
		];

		let lastTime = 0;
		const update = (time = 0) =>
		{//time.. 떨어지는 것 설정
			const deltaTime = time - lastTime;
			lastTime = time;
			
			this.player.update(deltaTime);
			this.draw();
			requestAnimationFrame(update);
		};
		
		update();
		this.updateScore(0);
	}
	
	//matrix 모양을 입힘. 
	draw()
	{
		this.context.fillStyle = '#000';
		this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
		
		this.drawMatrix(this.arena.matrix, {x: 0, y: 0});
		this.drawMatrix(this.player.matrix, this.player.pos);
	}
	//draw 메서드는 Canvas(게임 화면)의 위치와 넓이를 나타낸다.

	/*fillStyle메서드를 통해 색을 칠한다.
	fillRect의 기능은 x, y 좌표를 입력을 해주고 가로 세로의 길이를 정할 수 있다. width, height는 html에서 있다.
	*/


	drawMatrix(matrix, offset)
	{	// 값에 색칠을 하는 기능.
		matrix.forEach((row, y) => 
		{
			row.forEach((value, x) => 
			{
				if(value !== 0)
				{
					this.context.fillStyle = this.colors[value];
					this.context.fillRect(x + offset.x, 
									 y + offset.y, 
									 1, 1);
				}
			});
		});
	}
	
	updateScore(score)
	{
		this.element.querySelector('.score').innerText = score; 
	}
	
}
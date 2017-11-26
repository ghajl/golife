"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var boardSizes = exports.boardSizes = {
	small: setBoard(30, 20),
	medium: setBoard(60, 40),
	large: setBoard(90, 60)
};

function setBoard(width, height) {
	var squareSize = width === 30 ? 24 : width === 60 ? 12 : 8;
	return {
		width: width,
		height: height,
		squareSize: squareSize
	};
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnNcXGJvYXJkU2l6ZXMuanMiXSwibmFtZXMiOlsiYm9hcmRTaXplcyIsInNtYWxsIiwic2V0Qm9hcmQiLCJtZWRpdW0iLCJsYXJnZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3F1YXJlU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNO1FBQ0wsU0FBQSxBQUFTLElBRFMsQUFDbEIsQUFBYSxBQUNwQjtTQUFRLFNBQUEsQUFBUyxJQUZRLEFBRWpCLEFBQWEsQUFDckI7UUFBTyxTQUFBLEFBQVMsSUFIVixBQUFtQixBQUdsQixBQUFhO0FBSEssQUFDekI7O0FBS0QsU0FBQSxBQUFTLFNBQVQsQUFBa0IsT0FBbEIsQUFBeUIsUUFBUSxBQUNoQztLQUFJLGFBQWEsVUFBQSxBQUFVLEtBQVYsQUFBZSxLQUFLLFVBQUEsQUFBVSxLQUFWLEFBQWUsS0FBcEQsQUFBeUQsQUFDekQ7O1NBQU8sQUFFTjtVQUZNLEFBR047Y0FIRCxBQUFPLEFBS1A7QUFMTyxBQUNOIiwiZmlsZSI6ImJvYXJkU2l6ZXMuanMiLCJzb3VyY2VSb290IjoiQzovZm9sZGVyL25ldy9nb2wifQ==
(function () {
    'use strict';  //helps avoid values from getting saved to global scope
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope)
    {
        $scope.lunchList = "";
        $scope.answer = "";
        $scope.answerColor = "";
        $scope.answerColorBox = "";

        $scope.checkIfTooMuch = function()
        {
            if ($scope.lunchList.length < 1)
            {
                $scope.answer = "Please enter data first";
                $scope.answerColor = "red";
                $scope.answerColorBox = "redBox";
            }
            else
            {
                var words = $scope.lunchList.split(',');
                var ct = 0;
                //if there are commas with no characters between them, do not count as a word
                for (var x=0;x<words.length;x++)
                {
                    if (words[x].length >= 1)
                    {
                        ct++;
                    }
                }
                if (ct <= 3)
                {
                    $scope.answer = "enjoy!";
                    $scope.answerColor = "green";
                    $scope.answerColorBox = "greenBox";
                }
                else
                {
                    $scope.answer = "Too much!";
                    $scope.answerColor = "green";
                    $scope.answerColorBox = "greenBox";
                }
            }
        };
    }
})();
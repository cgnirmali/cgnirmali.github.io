using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace example_question
{
    internal class Program
    {
        static void Main(string[] args)
        {

            List<int> numbers = new List<int> {
                377, 262, 617, 284, 60, 111, 929, 832, 794, 283, 213, 937, 836,
                960, 839, 465, 55, 87, 302, 212, 547, 853, 675, 944, 506, 920, 310,
                678, 742, 604, 907, 928, 459, 809, 409, 811, 291, 457, 759, 183,
                760, 429, 827, 367, 58, 594, 1, 54, 593, 961 };
            int maxNum = numbers.Max();
            Console.WriteLine($"max number is:{maxNum}");
            Console.ReadLine();
        }

      
     
    }
}

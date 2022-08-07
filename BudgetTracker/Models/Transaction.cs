using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BudgetTracker.Models
{
    public class Transaction
    {
        [Key]
        public int TransactionId { get; set; } 

        public DateTime Date { get; set; } = DateTime.Now;

        public int CategoryId { get; set; }
        public Category Category { get; set; } // navigation property

        public float Amount { get; set; }

        [Column(TypeName = "nvarchar(85)")]
        public string? Note { get; set; }
    }
}

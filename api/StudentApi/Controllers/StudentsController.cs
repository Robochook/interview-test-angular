using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StudentApi.Mediatr.Students;
using StudentApi.Models.Students;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http.Cors;

namespace StudentApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors(origins: "http://localhost:8000:4200", headers: "*", methods: "*")]
    public class StudentsController : ControllerBase
    {
        private IMediator mediator;

        /// <summary>
        /// Gets the Mediator object.
        /// </summary>
        protected IMediator Mediator => mediator ??= (IMediator)HttpContext.RequestServices.GetService(typeof(IMediator))!;

        private readonly ILogger<StudentsController> _logger;

        public StudentsController(ILogger<StudentsController> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Gets the current students
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IEnumerable<Student>> Get()
        {
            var reponse = await Mediator.Send(new GetStudentsRequest());

            return reponse.Students;
        }

        /// <summary>
        /// Save a student
        /// </summary>
        /// <returns>
        /// Success as a Boolean
        /// </returns>
        [Route("add")]
        [HttpPost]        
        public async Task<bool> AddStudent(Student student)
        {
            var response = await Mediator.Send(new PostStudentsRequest(student));
            return response.Success;
        }
    }
}

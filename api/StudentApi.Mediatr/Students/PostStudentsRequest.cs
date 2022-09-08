using StudentApi.Models.Students;
using StudentApi.Services;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace StudentApi.Mediatr.Students
{
    public class PostStudentsRequest : IRequest<PostStudentsResponse>
    {
        public PostStudentsRequest(Student student1)
        {
            Student = student1;
        }

        public Student Student { get; set; }
    }
    public class PostStudentsResponse
    {
        public Boolean Success { get; set; }
    }

    public class PostStudentsHandler : IRequestHandler<PostStudentsRequest, PostStudentsResponse>
    {
        private IStudentsService _studentsService;

        public PostStudentsHandler(IStudentsService studentsService)
        {
            _studentsService = studentsService;
        }

        public Task<PostStudentsResponse> Handle(PostStudentsRequest request, CancellationToken cancellationToken)
        {
            // Gets all of the students
            var response = new PostStudentsResponse
            {
                Success = _studentsService.AddStudent(request.Student)
                
            };

            return Task.FromResult(response);
        }
    }
}
